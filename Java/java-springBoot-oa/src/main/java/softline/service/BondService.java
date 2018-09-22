package softline.service;

import java.util.List;
import java.util.Map;

import softline.deploy.domain.TecFileVo;
import softline.deploy.domain.TecUserColumnVo;
import softline.proto.domain.Divisions;
import softline.proto.domain.TecFile;
import softline.proto.domain.TecMenu;
import softline.proto.domain.TecUser;

public interface BondService {
	
	int deleteByPrimaryKey(Integer id);

    int insert(TecFile record);

    int insertSelective(TecFile record);

    TecFile selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TecFile record);

    int updateByPrimaryKey(TecFile record);
    
    List<TecFileVo> selectByMidAndCid(TecFileVo tecFileVo);
  
    List<TecFileVo> search(TecFileVo tecFileVo);
    
    TecUser doLogin(TecUser user);
    
    TecMenu selectByMenuId(Integer id);
    
    List<TecMenu> selectMenuByPid(Integer pid);
    
    List<TecUserColumnVo> selectZlByAcct(String acct);
    
    TecMenu selectPmenuByMenuId(Integer menuId);
    
    List<TecFileVo> selectAllByMenuPid(Map<String,Integer>map);
    
    List<TecFileVo> selectLatest(Map<String,Integer>map);
    
    //置顶
    void topTimeTask();
    
    List< TecMenu>  selectAllMenu(Map<String,Object>map);
    
    List<TecFile> selectSchedule(Map<String,Integer>map); 
    
    List<TecFile> personActive();
    
    List<TecFile> noticeList();
    
    int updateByPrimaryKeySelective(Divisions record);
    
    int insertSelective(Divisions record);
    
    List<Divisions>seletAllDivByMenu(Map<String,Integer>map);
   
    Divisions  selectDivByPrimaryKey(Integer Id);
    
    int deleteDivById(Integer Id) ;
}
