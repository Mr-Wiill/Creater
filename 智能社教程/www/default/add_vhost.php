<?php
// Update 3.0.6
// Check / at first position of $vh_folder
// Possibility to suppress VirtualHost
// Possibility for VirtualHost by IP

$server_dir = "../";

require $server_dir.'scripts/config.inc.php';
require $server_dir.'scripts/wampserver.lib.php';

// Language
$langue = $wampConf['language'];

if (isset($_GET['lang']))
  $langue = htmlspecialchars($_GET['lang'],ENT_QUOTES);

// Recherche des différentes langues disponibles
$langueswitcher = '<form method="get" style="display:inline-block;margin-left:10px;"><select name="lang" id="langues" onchange="this.form.submit();">'."\n";
$i_langues = glob('wamplangues/add_vhost_*.php');
$selected = false;
foreach ($i_langues as $i_langue) {
  $i_langue = str_replace(array('wamplangues/add_vhost_','.php'), '', $i_langue);
  $langueswitcher .= '<option value="'.$i_langue.'"';
  if(!$selected && $langue == $i_langue) {
  	$langueswitcher .= ' selected ';
  	$selected = true;
  }
  $langueswitcher .= '>'.$i_langue.'</option>'."\n";
}
$langueswitcher .= '</select></form>';

include('wamplangues/add_vhost_english.php');
if(file_exists('wamplangues/add_vhost_'.$langue.'.php')) {
	$langue_temp = $langues;
	include('wamplangues/add_vhost_'.$langue.'.php');
	$langues = array_merge($langue_temp, $langues);
}

// Correction automatique des erreurs ?
$automatique = (isset($_POST['correct']) ? true : false);

$message_ok = '';
$message = array();
$errors = false;
$errors_auto = false;
$vhost_created = false;
$sub_menu_on = true;

//On récupère la valeur de VirtualHostMenu
$VirtualHostMenu = !empty($wampConf['VirtualHostSubMenu']) ? $wampConf['VirtualHostSubMenu'] : "off";
if($VirtualHostMenu !== "on") {
	$message[] = '<p class="warning">'.$langues['VirtualSubMenuOn'].'</p>';
	$errors = true;
	$sub_menu_on = false;
}
//To not see form to suppress VirtualHost
$seeVhostDelete = false;
if(isset($_POST['seedelete']) && $_POST['seedelete'] == 'afficher')
	$seeVhostDelete = true;

/* Some tests about httpd-vhosts.conf file */
$virtualHost = check_virtualhost();

/* If form suppress VirtualHost submitted */
if(isset($_POST['vhostdelete'])) {
	if(isset($_POST['virtual_del'])) {
		$myVhostsContents = file_get_contents($c_apacheVhostConfFile);
		$c_hostsFile_escape = str_replace('\\', '\\\\', $c_hostsFile);
		$myHostsContents = file_get_contents($c_hostsFile_escape);
		$nb = count($_POST['virtual_del']);
		$replaceVhosts = $replaceHosts = false;
		for($i = 0; $i < $nb ;$i++) {
			//Extract <VirtualHost... </VirtualHost>
			$value = $_POST['virtual_del'][$i];
			$p_value = preg_quote($value);
			if(in_array($value, $virtualHost['ServerName'])) {
				$mask = "{
					<VirtualHost                         # beginning of VirtualHost
					[^<]*(?:<(?!/VirtualHost)[^<]*)*     # avoid premature end
					\n\s*ServerName\s+${p_value}\s*\n    # Test server name
					.*?                                  # we stop as soon as possible
					</VirtualHost>\s*\n                  # end of VirtualHost
					}isx";
				$count = 0;
				$myVhostsContents = preg_replace($mask,"\r\n",$myVhostsContents,-1,$count);
				if($count == 1) {
					$replaceVhosts = true;
					//Suppress ServerName into hosts file
					$count = $count1 = 0;
					$myHostsContents = preg_replace("~^[0-9\.:]+\s+".$p_value."\r?$~mi",'',$myHostsContents,-1, $count);
					$myHostsContents = str_ireplace($value,'',$myHostsContents,$count1);
					if($count > 0 || $count1 > 0 )
						$replaceHosts = true;
				}
			}
			else {
				$message[] = '<p class="warning">ServerName '.$value.' doesn\'t exist</p>';
				$errors = true;
			}
		} //End for
		if($replaceVhosts) {
			//Cleaning of httpd-vhosts.conf file
			$myVhostsContents = clean_file_contents($myVhostsContents);
			$fp = fopen($c_apacheVhostConfFile, 'wb');
			fwrite($fp, $myVhostsContents);
			fclose($fp);
		}
		if($replaceHosts) {
			//Cleaning of hosts file
			$myHostsContents = clean_file_contents($myHostsContents,true);
			$fp = fopen($c_hostsFile_escape, 'r+b');
			if(flock($fp, LOCK_EX)) { // acquire an exclusive lock
    		ftruncate($fp, 0);      // truncate file
    		fwrite($fp, $myHostsContents);
    		fflush($fp);            // flush output before releasing the lock
    		flock($fp, LOCK_UN);    // release the lock
			}
			else {
				$message[] = '<p class="warning">Unable to write to '.$c_hostsFile.' file</p>';
				$errors = true;
			}
			fclose($fp);
		}
		$virtualHost = check_virtualhost();
	}
}

$VhostDefine = $VhostDelete = "";
if($virtualHost['nb_Server'] > 0) {
	$i = 0;
	foreach($virtualHost['ServerName'] as $value) {
		$ip ='';
		if(!empty($virtualHost['virtual_ip'][$i]))
			$ip = " - VirtualHost ip = <span style='color:blue;'>".$virtualHost['virtual_ip'][$i].'</span>';
		$VhostDefine .= "<li><i>ServerName : </i><span style='color:blue;'>".$value."</span> - <i>Directory : </i>".$virtualHost['documentPath'][$i].$ip."</li>\n";
		if($value != 'localhost')
			$VhostDelete .= "<li><i>ServerName : </i><input type='checkbox' name='virtual_del[]' value='".$value."'/> <span style='color:blue;'>".$value."</span></li>";
		$i++;
	}
}
if($virtualHost['include_vhosts'] === false && !$errors) {
	if($automatique) {
		$httpConfFileContents = file_get_contents($c_apacheConfFile);
		$httpConfFileContents = preg_replace("~^[ \t]*#[ \t]*(Include[ \t]*conf/extra/httpd-vhosts.conf.*)$~m","$1",$httpConfFileContents,1);
		$fp = fopen($c_apacheConfFile,'wb');
		fwrite($fp,$httpConfFileContents);
		fclose($fp);
		$virtualHost = check_virtualhost();
	}
	else {
		$message[] = '<p class="warning_auto">'.sprintf($langues['UncommentInclude'],$c_apacheConfFile).'</p>';
		$errors = true;
		$errors_auto = true;
	}
}
if($virtualHost['vhosts_exist'] === false && !$errors) {
	if($automatique) {
		$fp = fopen($c_apacheVhostConfFile,'wb');
		fclose($fp);
		$virtualHost = check_virtualhost();
	}
	else {
		$message[] = '<p class="warning_auto">'.sprintf($langues['FileNotExists'],$c_apacheVhostConfFile).'</p>';
		$errors = true;
		$errors_auto = true;
	}
}
if(in_array("dummy", $virtualHost['ServerNameValid'], true) !== false && !$errors) {
	if($automatique) {
		$fp = fopen($c_apacheVhostConfFile,'wb');
		fclose($fp);
		$virtualHost = check_virtualhost();
	}
	else {
		$message[] = '<p class="warning_auto">'.sprintf($langues['NotCleaned'],$c_apacheVhostConfFile).'</p>';
		$errors = true;
		$errors_auto = true;
	}
}
if(empty($virtualHost['FirstServerName']) && !$errors) {
	if($automatique) {
		if(substr($wampConf['apacheVersion'],0,3) == '2.2') {
		$virtual_localhost = <<< EOFLOCAL

NameVirtualHost *:{$c_UsedPort}

<VirtualHost *:{$c_UsedPort}>
	ServerName localhost
	DocumentRoot "{$wwwDir}"
	<Directory  "{$wwwDir}/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
    Order Deny,Allow
    Deny from all
    Allow from localhost ::1 127.0.0.1
	</Directory>
</VirtualHost>

EOFLOCAL;
		}
		else {
		$virtual_localhost = <<< EOFLOCAL

#
<VirtualHost *:{$c_UsedPort}>
	ServerName localhost
	DocumentRoot "{$wwwDir}"
	<Directory  "{$wwwDir}/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
</VirtualHost>

EOFLOCAL;
		}

		$fp = fopen($c_apacheVhostConfFile,'wb');
		fwrite($fp,$virtual_localhost);
		fclose($fp);
		$virtualHost = check_virtualhost();

	}
	else {
		$message[] = '<p class="warning_auto">'.sprintf($langues['NoVirtualHost'],$c_apacheVhostConfFile).'</p>';
		$errors = true;
		$errors_auto = true;
	}
}

/* If form submitted */
if (isset($_POST['submit']) && !$errors) {
	// Escape any backslashes used in the path to the file
	$c_apacheVhostConfFile_escape = str_replace('\\', '\\\\', $c_apacheVhostConfFile);
	$c_hostsFile_escape = str_replace('\\', '\\\\', $c_hostsFile);
	$vh_name = trim(strip_tags($_POST['vh_name']));
	$vh_ip = trim(strip_tags($_POST['vh_ip']));
	$vh_folder = str_replace(array('\\','//'), '/',trim(strip_tags($_POST['vh_folder'])));
	if(substr($vh_folder,-1) == "/")
		$vh_folder = substr($vh_folder,0,-1);
	$vh_folder = strtolower($vh_folder);
	//3.0.6 - Check / at first character
	if(substr($vh_folder,0,1) == "/" && substr($vh_folder,0,2) != "//")
		$vh_folder = "/".$vh_folder;

	if($virtualHost['FirstServerName'] !== "localhost" && !$errors) {
		$message[] = '<p class="warning">'.sprintf($langues['NoFirst'],$c_apacheVhostConfFile).'</p>';
		$errors = true;
	}
	/* Validité du nom de domaine */
	if(preg_match('/^
		[A-Za-z]+ 		# letter in first place
		([A-Za-z0-9]	# letter or number at the beginning
		[-.](?![-.])	#  a . or - not followed by . or -
				|					#   or
		[A-Za-z0-9]		#  a letter or a number
		){1,60}				# this, repeated from 1 to 60 times
		[A-Za-z0-9]		# letter or number at the end
		$/x',$vh_name) == 0) {
		$message[] = '<p class="warning">'.sprintf($langues['ServerNameInvalid'],$vh_name).'</p>';
		$errors = true;
	}
	elseif((!file_exists($vh_folder) || !is_dir($vh_folder))) {
		$message[] = '<p class="warning">'.sprintf($langues['DirNotExists'],$vh_folder).'</p>';
		$errors = true;
	}
	elseif($c_hostsFile_writable !== true) {
		$message[] = '<p class="warning">'.sprintf($langues['FileNotWritable'],$c_hostsFile).'</p>';
		$errors = true;
	}
	elseif($wampConf['NotCheckDuplicate'] == 'off' && array_key_exists(strtolower($vh_name), array_change_key_case($virtualHost['ServerName'], CASE_LOWER))) {
		$message[] = '<p class="warning">'.sprintf($langues['VirtualAlreadyExist'],$vh_name).'</p>';
		$errors = true;
	}
	$c_UsedIp = '*';
	$c_HostIp = '127.0.0.1';
	if(!$errors && !empty($vh_ip)) {
		if($vh_ip == '127.0.0.0' || $vh_ip == '127.0.0.1' ) {
		$message[] = '<p class="warning">'.sprintf($langues['VirtualIpAlreadyUsed'],$vh_ip).'</p>';
		$errors = true;
		}
		// Validité IP locale
		elseif(check_IP($vh_ip) === false) {
			$message[] = '<p class="warning">'.sprintf($langues['LocalIpInvalid'],$vh_ip).'</p>';
			$errors = true;
		}
		elseif(in_array($vh_ip, $virtualHost['virtual_ip']) && $wampConf['NotCheckDuplicate'] == 'off') {
			$message[] = '<p class="warning">'.sprintf($langues['VirtualIpAlreadyUsed'],$vh_ip).'</p>';
			$errors = true;
		}
		else
			$c_UsedIp = $c_HostIp = $vh_ip;
	}
	if($errors === false) {
		/* Préparation du contenu des fichiers */
		if(substr($wampConf['apacheVersion'],0,3) == '2.2') {
		$httpd_vhosts_add = <<< EOFNEWVHOST

<VirtualHost {$c_UsedIp}:{$c_UsedPort}>
	ServerName {$vh_name}
	DocumentRoot "{$vh_folder}"
	<Directory  "{$vh_folder}/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
    Order Deny,Allow
    Deny from all
    Allow from localhost ::1 127.0.0.1
	</Directory>
</VirtualHost>

EOFNEWVHOST;
		}
		else {
		$httpd_vhosts_add = <<< EOFNEWVHOST


<VirtualHost {$c_UsedIp}:{$c_UsedPort}>
	ServerName {$vh_name}
	DocumentRoot "{$vh_folder}"
	<Directory  "{$vh_folder}/">
		Options +Indexes +Includes +FollowSymLinks +MultiViews
		AllowOverride All
		Require local
	</Directory>
</VirtualHost>

EOFNEWVHOST;
		}
		$hosts_add = <<< EOFHOSTS

{$c_HostIp}	{$vh_name}
::1	{$vh_name}

EOFHOSTS;
		/* Ouverture des fichiers pour ajout des lignes */
		$fp1 = fopen($c_apacheVhostConfFile_escape, 'a+b');
		$fp2 = fopen($c_hostsFile_escape, 'a+b');
		if (fwrite($fp1, $httpd_vhosts_add) && fwrite($fp2, $hosts_add)) {
			/* Actualisation des dns - Il faudrait redémarrer le service Apache par
			   	net stop wampapache
			   	net start wampapache
			   et c'est impossible car alors plus de PHP.
			   La commande ci-dessous fonctionne parfaitement dans un script comme wamp/script/msg.php
			   $command = 'start /b /wait '.$c_apacheExe.' -n wampapache -k restart';
			   mais pas si elle est lancée via http
			   et il n'existe pas de "graceful restart" Apache sous Windows*/

			/*$command = array(
				'net stop wampapache',
				'ipconfig /flushdns',
				'net stop Dnscache',
				'net start Dnscache',
				'net start wampapache',
			);
			ob_start();
			foreach($command as $value) {
				echo "Command-> ".$value."\n";
				passthru($value);
			}
			$output = iconv("CP850","UTF-8//TRANSLIT", ob_get_contents());
			ob_end_clean();
			$dns_refresh_message = '<pre><code>'.$output.'</code></pre>';*/

			$dns_refresh_message = "";

			$message_ok = '<p class="ok">'.sprintf($langues['VirtualCreated'],$vh_name).'</p>';
			$message_ok .= '<h2>'.$langues['CommandMessage'].'</h2>'.$dns_refresh_message;
			$message_ok .= '<p class="ok_plus">'.$langues['However'].'</p>';
			$vhost_created = true;
		}
		else {
			$message = '<p class="warning">'.$langues['NoModify'].'</p>';
		}
		fclose($fp1);
		fclose($fp2);
	}
}

$pageContents = <<< EOPAGE
<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Ajouter un "Virtual Host"</title>
		<meta charset="UTF-8">
		<style>
			* {
				margin: 0;
				padding: 0;
			}

			html {
				background: #ddd;
			}
			body {
				margin: 1em 10%;
				padding: 1em 3em;
				font: 80%/1.4 tahoma, arial, helvetica, lucida sans, sans-serif;
				border: 1px solid #999;
				background: #eee;
				position: relative;
			}
			header {
				margin-bottom: 1.8em;
				margin-top: .5em;
				padding-bottom: 0em;
				border-bottom: 1px solid #999;
				height: 125px;
				background: url(index.php?img=gifLogo) 0 0 no-repeat;
			}

			header h1 {
				padding-left: 130px;
				padding-top: 15px;
				font-size: 1.8em;
			}

			header h1 a:hover {color:blue;}

			h2 {
				margin: 0.8em 0 0 0;
			}

			p {
				padding: 1%;
			}

			.ok, .ok_plus, .warning, .warning_auto {
				text-align: center;
				font-size: 1.3em;
				text-shadow: 1px 1px 0 #000;
				background: #585858;
			}

			.ok {
				color: limegreen;
			}
			.ok_plus {
				text-align:justify;
				background: #777777;
			}

			.warning, .warning_auto, .ok_plus {
				color: orange;
			}
			.warning_auto {
				border: 3px solid #4FEF10;
			}
			label {
				padding-left: 22px;
				margin-left: 22px;
				background: url(index.php?img=pngWrench) 0 100% no-repeat;
			}

			input[type="text"] {
				width: 96%;
				margin: 0.2% 1% 1% 1%;
				padding: 1%;
				border: 1px solid #999;
			}

			input[type="submit"] {
				min-width: 50%;
				background: #DDD;
				border: 1px solid #999;
				margin: 1%;
				padding: 1%;
			}

			input[type="checkbox"] {
				vertical-align: middle;
			}

			input[type="submit"]:hover {
				background: #FF0099;
				color: #FFF;
			}

			pre {
				width: 98%;
				overflow: auto;
				padding: 1%;
				border: #FF0099 1px solid;
				background: #585858;
			}

			a {
				color: #000;
				text-decoration: none;
			}

			code, code.option, code.requis {
				color: #FFF;
				text-shadow: 1px 1px 0 #000;
				padding: 0.1% 0.5%;
				border-radius: 3px;
				background: #585858;
				font-size: 1.2em;
			}
			code.option {
				background: green;
			}
			code.requis {
				background: red;
			}
			.utility {
				position: absolute;
				right: 4em;
				top: 122px;
				font-size: 0.85em;
			}
		</style>
	</head>
	<body>
	<header>
		<h1><a href="add_vhost.php?lang={$langue}">{$langues['addVirtual']}</a> - <a href="index.php?lang={$langue}">{$langues['backHome']}</a></h1>
		<ul class="utility">
		  <li>Version ${c_wampVersion} - ${c_wampMode}${langueswitcher}</li>
	  </ul>
	</header>
EOPAGE;

if($vhost_created)
	$pageContents .= $message_ok;
else {
	if($errors) {
		foreach($message as $value)
		 	$pageContents .= $value;
		}
	if($sub_menu_on === true) {
	$pageContents .= <<< EOPAGEB
		<p>Apache Virtual Hosts <code>{$c_apacheVhostConfFile}</code></p>
EOPAGEB;
	if(!empty($VhostDefine)) {
	$pageContents .= <<< EOPAGEB
		<p>{$langues['VirtualHostExists']}</p>
		<div style='width:70%;float:left;'>
			<ul style='list-style:none;'>{$VhostDefine}</ul>
		</div>
		<div id='vhostdelete' style='width:28%;float:right;'>
EOPAGEB;
		if(!empty($VhostDelete) && $wampConf['NotCheckDuplicate'] == "off" && $wampConf['NotCheckVirtualHost'] == 'off') {
			if($seeVhostDelete) {
			$pageContents .= <<< EOPAGEB
			<form id='deletevhost' method='post'>
				<ul style='list-style:none;'>{$VhostDelete}</ul>
				<input type='submit' name='vhostdelete' value='{$langues['suppVhost']}' />
			</form>
EOPAGEB;
			}
			else {
			$pageContents .= <<< EOPAGEB
			<form id='seedelete' method='post' style='display:inline-block;'>
			<input type='hidden' name='seedelete' value='afficher'/>
			<input type='submit' value='{$langues['suppForm']}'/>
			</form>
EOPAGEB;
			}
		}
	}
	$pageContents .= <<< EOPAGEB
		</div>
		<div style='clear:both;'></div>
		<p>Windows hosts <code>{$c_hostsFile}</code></p>
EOPAGEB;
	$pageContents .= '<form method="post">';
	if($errors_auto) {
	$pageContents .= <<< EOPAGEB
	<p><label>{$langues['GreenErrors']}</label></p>
		<p style="text-align: right;"><input type="submit" name="correct" value="{$langues['Correct']}" /></p>

EOPAGEB;
	}
	else {
	$pageContents .= <<< EOPAGEB
		<p><label>{$langues['VirtualHostName']}<code class="requis"><i>{$langues['Required']}</i></code></label><br>
			<input type="text" name="vh_name" required="required" /><br>
		<label>{$langues['VirtualHostIP']}<code class="option"><i>{$langues['Optional']}</i></code></label><br>
			<input type="text" name="vh_ip"/><br>
		<label>{$langues['VirtualHostFolder']}<code class="requis"><i>{$langues['Required']}</i></code></label><br>
			<input type="text" name="vh_folder" required="required"/></p>
		<p style="text-align: right;"><input type="submit" name="submit" value="{$langues['Start']}" /></p>

EOPAGEB;
	}
	}
	$pageContents .= <<< EOPAGEB
	</form>
EOPAGEB;
}
$pageContents .= <<< EOPAGEB
</body>
</html>
EOPAGEB;

echo $pageContents;
?>