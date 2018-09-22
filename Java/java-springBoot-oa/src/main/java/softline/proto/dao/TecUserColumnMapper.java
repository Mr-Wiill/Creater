package softline.proto.dao;

import org.apache.ibatis.annotations.Mapper;

import softline.proto.domain.TecUserColumn;
@Mapper
public interface TecUserColumnMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TecUserColumn record);

    int insertSelective(TecUserColumn record);

    TecUserColumn selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TecUserColumn record);

    int updateByPrimaryKey(TecUserColumn record);
}