package softline.proto.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import softline.proto.domain.TecFile;

/**
 * 	文档表
 */
@Mapper
public interface TecFileMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TecFile record);

    int insertSelective(TecFile record);

    TecFile selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TecFile record);

    int updateByPrimaryKeyWithBLOBs(TecFile record);

    int updateByPrimaryKey(TecFile record);
    
    void topTimeTask();
    
    List<TecFile> selectSchedule(Map<String,Integer>map);
    
    List<TecFile> personActive();
   
    List<TecFile> noticeList();
}