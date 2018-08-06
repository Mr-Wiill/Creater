package softline.proto.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import softline.deploy.domain.TecFileVo;
import softline.proto.domain.TecMenu;
@Mapper
public interface TecMenuMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TecMenu record);

    int insertSelective(TecMenu record);

    TecMenu selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TecMenu record);

    int updateByPrimaryKey(TecMenu record);
    
     List<TecMenu>  selectMenuByPid(Integer pid);
     
     TecMenu selectPmenuByMenuId(Integer menuId);
     
     List<TecFileVo> selectAllByMenuPid(Map<String,Integer>map);
     
     List<TecMenu> selectAllMenu(Map<String, Object> map);
}