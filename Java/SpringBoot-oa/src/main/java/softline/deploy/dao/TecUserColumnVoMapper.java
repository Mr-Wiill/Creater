package softline.deploy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import softline.deploy.domain.TecUserColumnVo;
@Mapper
public interface TecUserColumnVoMapper {

List<TecUserColumnVo>selectZlByAcct(String acct);
}
