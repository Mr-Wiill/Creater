package softline.proto.dao;

import org.apache.ibatis.annotations.Mapper;

import softline.proto.domain.TecUser;

/**
 * 	用户表
 */
@Mapper
public interface TecUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TecUser record);

    int insertSelective(TecUser record);

    TecUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TecUser record);

    int updateByPrimaryKey(TecUser record);
    TecUser doLogin(TecUser user);
}