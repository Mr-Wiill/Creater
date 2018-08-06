package softline.proto.dao;

import org.apache.ibatis.annotations.Mapper;

import softline.proto.domain.TecOperationLogs;
@Mapper
public interface TecOperationLogsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TecOperationLogs record);

    int insertSelective(TecOperationLogs record);

    TecOperationLogs selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TecOperationLogs record);

    int updateByPrimaryKey(TecOperationLogs record);
}