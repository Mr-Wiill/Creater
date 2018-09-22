/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50515
Source Host           : 127.0.0.1:3306
Source Database       : bond_database

Target Server Type    : MYSQL
Target Server Version : 50515
File Encoding         : 65001

Date: 2018-06-13 14:19:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tec_column
-- ----------------------------
DROP TABLE IF EXISTS `tec_column`;
CREATE TABLE `tec_column` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '专栏ID',
  `NAME` varchar(50) NOT NULL COMMENT '专栏名称',
  `CODE` varchar(100) DEFAULT NULL COMMENT '自定义代码（URL路径）',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='专栏表';

-- ----------------------------
-- Records of tec_column
-- ----------------------------
INSERT INTO `tec_column` VALUES ('1', '债券业务中心', '/bbc/home');

-- ----------------------------
-- Table structure for tec_file
-- ----------------------------
DROP TABLE IF EXISTS `tec_file`;
CREATE TABLE `tec_file` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '文档表主键ID',
  `COLUMN_ID` int(11) NOT NULL COMMENT '专栏表主键ID',
  `MENU_ID` int(11) NOT NULL COMMENT '菜单表主键ID',
  `TITLE` varchar(100) DEFAULT NULL COMMENT '标题',
  `NAME` varchar(100) DEFAULT NULL COMMENT '文件名称',
  `PATH` varchar(200) DEFAULT NULL COMMENT '文件在服务器中的路径',
  `UUID` varchar(100) DEFAULT NULL COMMENT 'UUID(唯一标示)',
  `CREATE_ACCT` varchar(50) DEFAULT NULL COMMENT '创建人账号',
  `CREATE_TIME` varchar(20) DEFAULT NULL COMMENT '创建时间',
  `IS_TOP` smallint(1) DEFAULT NULL COMMENT '是否置顶（0否1是）',
  `TOP_TIME` varchar(20) DEFAULT NULL COMMENT '置顶时间',
  `ISSUE_TIME` varchar(10) DEFAULT NULL COMMENT '发布时间',
  `REMARK` text COMMENT '备注',
  `IS_FLAG` tinyint(1) DEFAULT NULL COMMENT '删除标记（0否1是）',
  `sort` int(11) DEFAULT NULL,
  `content1` varchar(200) DEFAULT NULL,
  `content2` varchar(200) DEFAULT NULL,
  `content3` varchar(200) DEFAULT NULL,
  `content4` varchar(200) DEFAULT NULL,
  `content5` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`),
  KEY `MENU_ID` (`MENU_ID`) USING BTREE,
  KEY `COLUMN_ID` (`COLUMN_ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8 COMMENT='文档表';

-- ----------------------------
-- Records of tec_file
-- ----------------------------
INSERT INTO `tec_file` VALUES ('14', '1', '1501', '中国新品牌论坛', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '马允', '0', '2018-06-12', '', '马允:【活动】2018-06-12 中国新品牌论坛。');
INSERT INTO `tec_file` VALUES ('15', '1', '1501', '第三届数字与人文科学国际会议', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '马花藤', '2', '2018-06-11', '2018-06-13', '马花藤:【出差】2018-06-11~2018-06-13 第三届数字与人文科学国际会议。');
INSERT INTO `tec_file` VALUES ('16', '1', '1501', '因个人原因调休', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '甲乐亭', '1', '2018-06-12', '2018-06-30', '甲乐亭:【休假】2018-06-12~2018-06-30 因个人原因调休。');
INSERT INTO `tec_file` VALUES ('17', '1', '1501', '到北京商务谈判', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '虎微微', '2', '2018-06-11', '2018-06-15', '虎微微:【出差】2018-06-11~2018-06-15 到北京商务谈判。');
INSERT INTO `tec_file` VALUES ('18', '1', '1501', '到深圳举行小米新品发布会', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '雷布斯', '2', '2018-06-11', '2018-06-12', '雷布斯:【出差】2018-06-11~2018-06-12 到深圳举行小米新品发布会。');
INSERT INTO `tec_file` VALUES ('19', '1', '1501', '北京鸟巢举行锤子发布会', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '罗永好', '0', '2018-06-11', '', '罗永好:【活动】2018-06-11 北京鸟巢举行锤子发布会。');
INSERT INTO `tec_file` VALUES ('20', '1', '1501', '南京谈判出行业务', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '王星', '2', '2018-06-11', '2018-06-15', '王星:【出差】2018-06-11~2018-06-15 南京谈判出行业务。');
INSERT INTO `tec_file` VALUES ('21', '1', '1501', '国际互联网大会', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '程蔚', '0', '2018-06-13', '', '程蔚:【活动】2018-06-13 国际互联网大会。');
INSERT INTO `tec_file` VALUES ('22', '1', '1501', '广州商务谈判', null, null, null, 'admin', null, null, null, '2018-06-07', null, '0', '1', '周虹喂', '2', '2018-06-11', '2018-06-15', '周虹喂:【出差】2018-06-11~2018-06-15 广州商务谈判。');
INSERT INTO `tec_file` VALUES ('23', '1', '1502', '2018区块链技术交流大会,2018区块链技术交流大会', null, null, null, 'admin', null, null, null, '2018-06-07', '区块链技术的应用是颠覆性的。 各大行业巨头、翘楚争相布局区块链技术，区块链+将是2018年真正的风口，继第四次工业革命后，第五次工业革命即将到来。“这是一场顺之者昌，逆之者亡的伟大技术革命，对传统的颠覆，将比互联网、移动互联网来得更加迅猛、彻底。', '0', null, '技术部', null, null, null, null);
INSERT INTO `tec_file` VALUES ('24', '1', '1502', '第六届中国网络安全大会', null, null, null, 'admin', null, null, null, '2018-06-07', '国网络安全大会是在国家相关部委的指导下，由赛可达实验室联合百家国内外众多具有影响力的行业联盟协会、机构共同主办的年度综合性行业会议，从2013年至今已成功举办五届。大会以“全球视野下的网络安全”为永久主题，旨在引入并借鉴国际信息安全领域最前沿的防护理念与技术成果，洞悉交流全球信息安全最新发展趋势，聚焦探讨信息安全技术与应用热点话题，与国际安全创新防护理念同步，从而推动我国网络安全保障体系建设，提升国家重点行业网络安全防护水平。', '0', null, '技术部', null, null, null, null);
INSERT INTO `tec_file` VALUES ('25', '1', '1502', '2018.6.11企业内部员工培训大会', null, null, null, 'admin', null, null, null, '2018-06-07', '每年一次的员工培训大会将于2018.6.11当然举办，届时会有一些业内知名、大佬到我司来给大家讲解公司运营的相关知识和技巧。', '0', null, '市场运营部', null, null, null, null);
INSERT INTO `tec_file` VALUES ('26', '1', '1502', '关于公司内部人员架构调整的通知,关于公司内部人员架构调整的通知', null, null, null, 'admin', null, null, null, '2018-06-07', '关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知关于公司内部人员架构调整的通知', '0', null, '人力资源部', null, null, null, null);
INSERT INTO `tec_file` VALUES ('27', '1', '1502', '关于年终总结大会的活动通知', null, null, null, 'admin', null, null, null, '2018-06-07', '关于年终总结大会的活动通知，关于年终总结大会的活动通知关于年终总结大会的活动通知关于，年终总结大会的活动通知关于年，终总结大会的活动通知关于年终总结，大会的活动通知关于年终总结大会的活动通知。', '0', null, '人力资源部', null, null, null, null);
INSERT INTO `tec_file` VALUES ('28', '1', '1602', '人力资源管理师证书的培训说明', '人力资源管理师培训.docx', '\\home\\in\\bondFile\\a5e8758248344c3fa1bce63d996e84b1.docx', 'a5e8758248344c3fa1bce63d996e84b1', 'admin', null, '1', '2018-06-15', '2018-06-07', '人员资源管理师培训会说明', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('29', '1', '1602', '企业员工Java技术培训名单', 'Java培训员工名单.txt', '\\home\\in\\bondFile\\fcb57c9f3754471482cf300a5b277e42.txt', 'fcb57c9f3754471482cf300a5b277e42', 'admin', null, '1', '2018-06-14', '2018-06-07', 'Java技术培训名单', '1', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('30', '1', '1602', '市场部销售人员的培训工作', '关于销售人员的培训说明.docx', '\\home\\in\\bondFile\\f1c63eb0873e415aac083df816e1627f.docx', 'f1c63eb0873e415aac083df816e1627f', 'admin', null, '1', '2018-06-14', '2018-06-07', '', '1', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('31', '1', '1602', '关于销售员的培训工作', '关于销售人员的培训说明.docx', '\\home\\in\\bondFile\\98d03bb1744e476e9d9a57b20d8d8da4.docx', '98d03bb1744e476e9d9a57b20d8d8da4', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('32', '1', '1602', '企业员工Java技术培训名单', 'Java培训员工名单.txt', '\\home\\in\\bondFile\\e0feae2d29854bbdbb78394ba0628fb2.txt', 'e0feae2d29854bbdbb78394ba0628fb2', 'admin', null, '0', '', '2018-06-07', '企业员工Java培训名单', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('33', '1', '1601', '财务部招聘的职位及其说明', '财务部招聘的职位以及说明.docx', '\\home\\in\\bondFile\\a720334f3c704a3ab5e61cacd6a02552.docx', 'a720334f3c704a3ab5e61cacd6a02552', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('34', '1', '1601', '技术部招聘的职位及其说明', '技术部招聘职位以及说明.docx', '\\home\\in\\bondFile\\1f5d093fa96744b1b7635ee256da8607.docx', '1f5d093fa96744b1b7635ee256da8607', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('35', '1', '1601', '市场部招聘的职位及其说明', '市场部招聘的职位以及说明.docx', '\\home\\in\\bondFile\\025c0dbeacbf47a987c36e583c4c3d37.docx', '025c0dbeacbf47a987c36e583c4c3d37', 'admin', null, '1', '2018-06-21', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('36', '1', '1603', '公司年终奖获奖名单', '年终奖获奖名单.docx', '\\home\\in\\bondFile\\691a13a550d54a50ac76185c47a3c0e0.docx', '691a13a550d54a50ac76185c47a3c0e0', 'admin', null, '1', '2018-06-22', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('37', '1', '1603', '公司内部薪资制度说明表', '公司内部薪资制度说明.txt', '\\home\\in\\bondFile\\9d121eb3533945d1b26274a9cad21b74.txt', '9d121eb3533945d1b26274a9cad21b74', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('38', '1', '1603', '员工绩效加薪条件说明书', '员工绩效加薪条件说明.txt', '\\home\\in\\bondFile\\5d89c10cd0c44c9d8a49e9dc47eb19cf.txt', '5d89c10cd0c44c9d8a49e9dc47eb19cf', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('39', '1', '1701', '企业员工6月工作一览表', '员工6月工资一览表.xlsx', '\\home\\in\\bondFile\\621ec9448a314f2f9def0a3064671404.xlsx', '621ec9448a314f2f9def0a3064671404', 'admin', null, '1', '2018-06-22', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('40', '1', '1701', '关于员工午餐补贴的说明', '关于员工午餐补贴的说明.txt', '\\home\\in\\bondFile\\95c45aa4530f4b6b80be0e5d46f5a354.txt', '95c45aa4530f4b6b80be0e5d46f5a354', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('41', '1', '1701', '关于员工出差发票表现的说明', '关于员工出差发票表现的说明.docx', '\\home\\in\\bondFile\\1c5a36a13365419f94ce144d17a81c36.docx', '1c5a36a13365419f94ce144d17a81c36', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('42', '1', '1702', '关于员工五险一金的说明', '关于员工五险一金的说明.xlsx', '\\home\\in\\bondFile\\44b45a9fc30f46f18c8afaf37294ea97.xlsx', '44b45a9fc30f46f18c8afaf37294ea97', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('43', '1', '1702', '公司近期所交税务的情况', '公司所交税务的情况.xlsx', '\\home\\in\\bondFile\\bf926cf71847427593e8e98b5c995c68.xlsx', 'bf926cf71847427593e8e98b5c995c68', 'admin', null, '1', '2018-06-22', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('44', '1', '1703', '公司详细介绍质料', '公司详细介绍资料.pptx', '\\home\\in\\bondFile\\2f57ec58b6ee4d6ebc590dce3cdcac4a.pptx', '2f57ec58b6ee4d6ebc590dce3cdcac4a', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('45', '1', '1703', '公司商业计划书', '公司的商业计划书.docx', '\\home\\in\\bondFile\\9faa20eb9b9443c28a00f42b1045672e.docx', '9faa20eb9b9443c28a00f42b1045672e', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('46', '1', '1703', '公司路演演讲PPT', '公司路演演讲PPT.pptx', '\\home\\in\\bondFile\\d3d3f8b493e24e91b2ad12aa9eb3fe23.pptx', 'd3d3f8b493e24e91b2ad12aa9eb3fe23', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('47', '1', '1703', '关于红杉资本1000万美元D轮融资的详细说明', '关于红杉资本1000万美元D轮融资的详细说明.docx', '\\home\\in\\bondFile\\1623ae6e01a9426a8e6feffd41b4fb44.docx', '1623ae6e01a9426a8e6feffd41b4fb44', 'admin', null, '1', '2018-06-30', '2018-06-07', '关于红杉资本1000万美元D轮融资的详细说明', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('48', '1', '1801', '微信公众号平台运营人员', '微信公众号平台运营人员.txt', '\\home\\in\\bondFile\\9ff5997bdef544ce8740a38b27e957df.txt', '9ff5997bdef544ce8740a38b27e957df', 'admin', null, '0', '', '2018-06-07', '', '1', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('49', '1', '1801', '618京东促销活动的说明', '618京东促销活动的说明.docx', '\\home\\in\\bondFile\\c062d480d059489b837767492a43f9e5.docx', 'c062d480d059489b837767492a43f9e5', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('50', '1', '1801', '天猫电商平台618促销活动的说明.docx', '天猫电商平台618促销活动的说明.docx', '\\home\\in\\bondFile\\00c2dd6568c6409886f405c08036592c.docx', '00c2dd6568c6409886f405c08036592c', 'admin', null, '1', '2018-06-20', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('51', '1', '1801', '微商城第二季度销售报表', '微信微商城第二季度销售报表.docx', '\\home\\in\\bondFile\\35c961d73f4e4155a658fd87a8afce5e.docx', '35c961d73f4e4155a658fd87a8afce5e', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('52', '1', '1802', '微信公众号平台运营人员', '微信公众号平台运营人员.txt', '\\home\\in\\bondFile\\d2bb1c9cb45b4d6588dde8e6cf0f3d8d.txt', 'd2bb1c9cb45b4d6588dde8e6cf0f3d8d', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('53', '1', '1802', '抖音短视频的制作说明', '抖音短视频的制作说明.docx', '\\home\\in\\bondFile\\3fd09a7c89a34f4284d30c7701e5f94a.docx', '3fd09a7c89a34f4284d30c7701e5f94a', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('54', '1', '1802', '新浪微博运营内容清单', '新浪微博运营内容清单.txt', '\\home\\in\\bondFile\\836a9f8dce1b4a5b963f2acd0148eb51.txt', '836a9f8dce1b4a5b963f2acd0148eb51', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('55', '1', '1803', '微商城微信小程序的线下推广活动', '微商城微信小程序的线下推广活动.docx', '\\home\\in\\bondFile\\d74dc88142c14d16b9a6db4cb27a89b4.docx', 'd74dc88142c14d16b9a6db4cb27a89b4', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('56', '1', '1803', '关于校园内下线路演活动的说明', '关于员工午餐补贴的说明.txt', '\\home\\in\\bondFile\\7975438c2d0f490faa115f04e15b56aa.txt', '7975438c2d0f490faa115f04e15b56aa', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('57', '1', '1901', '大数据系统开发需求说明书', '关于员工出差发票表现的说明.docx', '\\home\\in\\bondFile\\f34643cbc58c49b0980c55f023b23879.docx', 'f34643cbc58c49b0980c55f023b23879', 'admin', null, '1', '2018-06-15', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('58', '1', '1901', 'Git常用命令符汇总表', '年终奖获奖名单.docx', '\\home\\in\\bondFile\\eb80b392708243408f0eb48c6a8cdba9.docx', 'eb80b392708243408f0eb48c6a8cdba9', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('59', '1', '1901', '大数据平台的操作手册', '公司的商业计划书.docx', '\\home\\in\\bondFile\\706bd8361e1c4bf0b8d298149e6dd616.docx', '706bd8361e1c4bf0b8d298149e6dd616', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('60', '1', '1902', '关于阿里云的使用说明书', '618京东促销活动的说明.docx', '\\home\\in\\bondFile\\bc77f2736e5b4f7c9b7627d844b948f1.docx', 'bc77f2736e5b4f7c9b7627d844b948f1', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('61', '1', '1902', '关于腾讯云的使用说明书', '天猫电商平台618促销活动的说明.docx', '\\home\\in\\bondFile\\dfeff0369c434b52a12cc6da02f062f7.docx', 'dfeff0369c434b52a12cc6da02f062f7', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('62', '1', '1902', '企业云平台的操作手册', '关于员工午餐补贴的说明.txt', '\\home\\in\\bondFile\\b02bd75eb15048e49f478836333e628e.txt', 'b02bd75eb15048e49f478836333e628e', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('63', '1', '1903', '微商城开发进度说明表', '关于员工五险一金的说明.xlsx', '\\home\\in\\bondFile\\0445f333634140bca5b287850fb031b1.xlsx', '0445f333634140bca5b287850fb031b1', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('64', '1', '1903', '微商城小程序需求表更说明书', '微信公众号平台运营人员.txt', '\\home\\in\\bondFile\\ccedc505f2694260b006d20a782aa7d9.txt', 'ccedc505f2694260b006d20a782aa7d9', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('65', '1', '1903', '关于微商城APP的开发流程说明', '财务部招聘的职位以及说明.docx', '\\home\\in\\bondFile\\fbc56a48a2de4962850b6e64a9fc0e76.docx', 'fbc56a48a2de4962850b6e64a9fc0e76', 'admin', null, '1', '2018-06-15', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('66', '1', '1803', '佛系大学生', '年终奖获奖名单.docx', '\\home\\in\\bondFile\\d7987a310da34ea4a7eac0789b30d4bd.docx', 'd7987a310da34ea4a7eac0789b30d4bd', 'admin', null, '0', '', '2018-06-07', '', '0', null, null, null, null, null, null);
INSERT INTO `tec_file` VALUES ('67', '1', '1502', '06.11毕业设计答辩', null, null, null, 'admin', null, null, null, '2018-06-11', '答辩', '0', null, '人事部', null, null, null, null);

-- ----------------------------
-- Table structure for tec_menu
-- ----------------------------
DROP TABLE IF EXISTS `tec_menu`;
CREATE TABLE `tec_menu` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '菜单表主键ID',
  `COLUMN_ID` int(11) NOT NULL COMMENT '专栏表主键ID',
  `NAME` varchar(50) NOT NULL COMMENT '菜单名称',
  `CODE` varchar(100) DEFAULT NULL COMMENT '自定义代码（URL路径）',
  `PARENT_ID` int(11) DEFAULT NULL COMMENT '父类ID',
  `ORDER` tinyint(3) NOT NULL COMMENT '菜单排序',
  `LEVEL` tinyint(1) NOT NULL COMMENT '层级',
  `IS_FLAG` tinyint(1) NOT NULL COMMENT '删除标记（0否1是）',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`),
  KEY `COLUMN_ID` (`COLUMN_ID`),
  CONSTRAINT `MENU_COLUMN_ID` FOREIGN KEY (`COLUMN_ID`) REFERENCES `tec_column` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1904 DEFAULT CHARSET=utf8 COMMENT='菜单表';

-- ----------------------------
-- Records of tec_menu
-- ----------------------------
INSERT INTO `tec_menu` VALUES ('15', '1', '首页', '/bbc/home', null, '1', '1', '0');
INSERT INTO `tec_menu` VALUES ('16', '1', '人力资源', '/bbc/page2Home/1/16', null, '2', '1', '0');
INSERT INTO `tec_menu` VALUES ('17', '1', '财务管理', '/bbc/page2Home/1/17', null, '3', '1', '0');
INSERT INTO `tec_menu` VALUES ('18', '1', '市场运营', '/bbc/page2Home/1/18', null, '4', '1', '0');
INSERT INTO `tec_menu` VALUES ('19', '1', '技术开发', '/bbc/page2Home/1/19', null, '5', '1', '0');
INSERT INTO `tec_menu` VALUES ('1501', '1', '人员动态', '/bbc/page2Home/1/1501', '15', '1', '2', '0');
INSERT INTO `tec_menu` VALUES ('1502', '1', '公告周知', '/bbc/page2Home/1/1502', '15', '2', '2', '0');
INSERT INTO `tec_menu` VALUES ('1503', '1', '工作督办', '/bbc/page2Home/1/1503', '15', '3', '2', '0');
INSERT INTO `tec_menu` VALUES ('1504', '1', '最新文件', '/bbc/page2Home/1/1504', '15', '4', '2', '0');
INSERT INTO `tec_menu` VALUES ('1601', '1', '招聘工作', '/bbc/page2Home/1/1601', '16', '1', '2', '0');
INSERT INTO `tec_menu` VALUES ('1602', '1', '员工培训', '/bbc/page2Home/1/1602', '16', '2', '2', '0');
INSERT INTO `tec_menu` VALUES ('1603', '1', '绩效管理', '/bbc/page2Home/1/1603', '16', '3', '2', '0');
INSERT INTO `tec_menu` VALUES ('1701', '1', '资金管理', '/bbc/page2Home/1/1701', '17', '1', '2', '0');
INSERT INTO `tec_menu` VALUES ('1702', '1', '税务管理', '/bbc/page2Home/1/1702', '17', '2', '2', '0');
INSERT INTO `tec_menu` VALUES ('1703', '1', '公司融资', '/bbc/page2Home/1/1703', '17', '3', '2', '0');
INSERT INTO `tec_menu` VALUES ('1801', '1', '电商运营', '/bbc/page2Home/1/1801', '18', '1', '2', '0');
INSERT INTO `tec_menu` VALUES ('1802', '1', '新媒体运营', '/bbc/page2Home/1/1802', '18', '2', '2', '0');
INSERT INTO `tec_menu` VALUES ('1803', '1', '线下推广', '/bbc/page2Home/1/1803', '18', '3', '2', '0');
INSERT INTO `tec_menu` VALUES ('1901', '1', '大数据部门', '/bbc/page2Home/1/1901', '19', '1', '2', '0');
INSERT INTO `tec_menu` VALUES ('1902', '1', '云计算部门', '/bbc/page2Home/1/1902', '19', '2', '2', '0');
INSERT INTO `tec_menu` VALUES ('1903', '1', '系统开发部', '/bbc/page2Home/1/1903', '19', '3', '2', '0');

-- ----------------------------
-- Table structure for tec_operation_logs
-- ----------------------------
DROP TABLE IF EXISTS `tec_operation_logs`;
CREATE TABLE `tec_operation_logs` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '日志表主键ID',
  `ACCT` varchar(50) DEFAULT NULL COMMENT '用户账号',
  `MODULE` varchar(150) NOT NULL COMMENT '执行模块',
  `METHOD` varchar(100) NOT NULL COMMENT '执行方法',
  `IP` varchar(20) NOT NULL COMMENT '请求IP地址',
  `TIME` varchar(20) NOT NULL COMMENT '响应时间',
  `COMMITE` varchar(500) NOT NULL COMMENT '执行描述',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8 COMMENT='操作日志表';

-- ----------------------------
-- Records of tec_operation_logs
-- ----------------------------
INSERT INTO `tec_operation_logs` VALUES ('98', 'admin', '增加:债券业务中心->首页->公告周知->2018区块链技术交流大会,2018区块链技术交流大会', '执行了：softline.controller.BondController.addRecord方法', '172.23.190.24', '2018-06-07 15:22:16', '执行成功！');
INSERT INTO `tec_operation_logs` VALUES ('99', 'admin', '增加:债券业务中心->首页->公告周知->关于公司内部人员架构调整的通知,关于公司内部人员架构调整的通知', '执行了：softline.controller.BondController.addRecord方法', '172.23.190.24', '2018-06-07 15:22:27', '执行成功！');
INSERT INTO `tec_operation_logs` VALUES ('100', 'admin', '增加:债券业务中心->市场运营->线下推广->佛系大学生', '执行了：softline.controller.BondController.addRecord方法', '172.23.190.24', '2018-06-07 15:27:51', '执行成功！');
INSERT INTO `tec_operation_logs` VALUES ('101', 'admin', '增加:债券业务中心->首页->公告周知->毕业典礼活动通知', '执行了：softline.controller.BondController.addRecord方法', '172.23.190.24', '2018-06-07 20:25:08', '执行成功！');
INSERT INTO `tec_operation_logs` VALUES ('102', 'admin', '增加:债券业务中心->首页->公告周知->06.11毕业设计答辩', '执行了：softline.controller.BondController.addRecord方法', '172.20.10.5', '2018-06-11 09:18:49', '执行成功！');

-- ----------------------------
-- Table structure for tec_user
-- ----------------------------
DROP TABLE IF EXISTS `tec_user`;
CREATE TABLE `tec_user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `ACCT` varchar(50) NOT NULL COMMENT '账号',
  `PSWD` char(32) NOT NULL COMMENT '密码',
  `NAME` varchar(20) NOT NULL COMMENT '用户姓名',
  `DEPT` varchar(100) DEFAULT NULL,
  `IS_FLAG` tinyint(1) NOT NULL COMMENT '删除标记（0否1是）',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID` (`ID`),
  KEY `ACCT` (`ACCT`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of tec_user
-- ----------------------------
INSERT INTO `tec_user` VALUES ('16', 'admin', '21232f297a57a5a743894a0e4a801fc3', '管理员', 'dept_all', '0');
INSERT INTO `tec_user` VALUES ('17', 'user1', '24c9e15e52afc47c225b757e7bee1f9d', '人事部，张某', 'dept1', '0');
INSERT INTO `tec_user` VALUES ('18', 'user2', '7e58d63b60197ceb55a1c487989a3720', '财务部，李某', 'dept2', '0');
INSERT INTO `tec_user` VALUES ('19', 'user3', '92877af70a45fd6a2ed7fe81e1236b78', '市场部，陈某', 'dept3', '0');
INSERT INTO `tec_user` VALUES ('20', 'user4', '3f02ebe3d7929b091e3d8ccfde2f3bc6', '技术部，马某', 'dept4', '0');

-- ----------------------------
-- Table structure for tec_user_column
-- ----------------------------
DROP TABLE IF EXISTS `tec_user_column`;
CREATE TABLE `tec_user_column` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '中间表ID',
  `ACCT` varchar(50) NOT NULL COMMENT '账号',
  `COLUMN_ID` int(11) NOT NULL COMMENT '专栏表(tec_column主键ID)',
  PRIMARY KEY (`ID`),
  KEY `COLUMN_ID` (`COLUMN_ID`),
  KEY `ACCT` (`ACCT`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='用户专栏关联表';

-- ----------------------------
-- Records of tec_user_column
-- ----------------------------
INSERT INTO `tec_user_column` VALUES ('16', 'admin', '1');
INSERT INTO `tec_user_column` VALUES ('17', 'user1', '1');
INSERT INTO `tec_user_column` VALUES ('18', 'user2', '1');
INSERT INTO `tec_user_column` VALUES ('19', 'user3', '1');
INSERT INTO `tec_user_column` VALUES ('20', 'user4', '1');

-- ----------------------------
-- Table structure for work_divisions
-- ----------------------------
DROP TABLE IF EXISTS `work_divisions`;
CREATE TABLE `work_divisions` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '工作督办表主键ID',
  `MENU_ID` int(11) NOT NULL COMMENT '菜单id',
  `TITLE` varchar(100) DEFAULT NULL COMMENT '任务',
  `CONTENT1` varchar(200) DEFAULT NULL COMMENT '类别',
  `CONTENT2` varchar(200) DEFAULT NULL COMMENT '责任/牵头部门',
  `CONTENT3` varchar(200) DEFAULT NULL COMMENT '责任/牵头部门人',
  `CONTENT4` varchar(200) DEFAULT NULL COMMENT '截止时间',
  `CONTENT5` varchar(200) DEFAULT NULL COMMENT '状态',
  `REMARK` varchar(500) DEFAULT NULL COMMENT '备注',
  `CREATE_ACCT` varchar(10) DEFAULT NULL COMMENT '创建人',
  `MODIFY_ACCT` varchar(10) DEFAULT NULL COMMENT '修改人',
  `CREATE_TIME` varchar(20) DEFAULT NULL COMMENT '创建时间',
  `MODIFY_TIME` varchar(20) DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of work_divisions
-- ----------------------------
INSERT INTO `work_divisions` VALUES ('1', '1503', '做好毕业典礼活动的相关工作', '活动', 'null-->null', '陈老师', '2018-06-13', '终止', '为了确保2018年的毕业典礼能顺利进行，6月27前要把以前准备工作做好。为了确保2018年的毕业典礼能顺利进行，6月27前要把以前准备工作做好。为了确保2018年的毕业典礼能顺利进行，6月27前要把以前准备工作做好。为了确保2018年的毕业典礼能顺利进行，6月27前要把以前准备工作做好。', 'admin', 'admin', '2018-05-22', '2018-06-07');
INSERT INTO `work_divisions` VALUES ('2', '1503', '导师检查学生们的论文查重情况', '检查', '人力资源部-->财务管理部', '周老师', '2018-06-11', '进行中', '查重率低于10%的论文不合格', 'admin', 'admin', '2018-05-26', '2018-06-07');
INSERT INTO `work_divisions` VALUES ('3', '1503', '与某科技公司业务谈判', '商务谈判', '财务管理部-->市场运营部', '李石坚', '2018-06-15', '进行中', '由于公司业务的拓展，公司需要在新业务领域寻找一些得力合作伙伴。', 'admin', null, '2018-06-07', null);
INSERT INTO `work_divisions` VALUES ('4', '1503', '组织公司员工完成对员工手册的学习', '组织活动', '人力资源部-->人力资源部', '李诚诚', '2018-06-15', '进行中', '组织公司员工完成对员工手册的学习，组织公司员工完成对员工手册的学习，组织公司员工完成对员工手册的学习，组织公司员工完成对员工手册的学习。', 'admin', null, '2018-06-07', null);
INSERT INTO `work_divisions` VALUES ('5', '1503', '微信商城项目的推进工作', '技术开发', '技术开发部-->市场运营部', '李想', '2018-06-29', '进行中', '关于公司微商城微信小程序的开发工作。', 'admin', null, '2018-06-07', null);
