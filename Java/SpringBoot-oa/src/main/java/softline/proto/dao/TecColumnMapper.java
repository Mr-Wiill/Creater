package softline.proto.dao;

import org.apache.ibatis.annotations.Mapper;

import softline.proto.domain.TecColumn;

@Mapper
public interface TecColumnMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TecColumn record);

    int insertSelective(TecColumn record);

    TecColumn selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TecColumn record);

    int updateByPrimaryKey(TecColumn record);
}