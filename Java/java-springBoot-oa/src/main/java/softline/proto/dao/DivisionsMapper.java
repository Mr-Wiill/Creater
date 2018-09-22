package softline.proto.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import softline.proto.domain.Divisions;


@Mapper
public interface DivisionsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Divisions record);

    int insertSelective(Divisions record);

    Divisions selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Divisions record);

    int updateByPrimaryKey(Divisions record);
    
    List<Divisions>seletAllDivByMenu(Map<String,Integer>map);
    
    Divisions selectDivByPrimaryKey(Integer Id) ;
    
}