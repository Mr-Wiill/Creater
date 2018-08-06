package softline.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import softline.deploy.dao.TecFileVoMapper;
import softline.deploy.dao.TecUserColumnVoMapper;
import softline.deploy.domain.TecFileVo;
import softline.deploy.domain.TecUserColumnVo;
import softline.proto.dao.DivisionsMapper;
import softline.proto.dao.TecFileMapper;
import softline.proto.dao.TecMenuMapper;
import softline.proto.dao.TecUserMapper;
import softline.proto.domain.Divisions;
import softline.proto.domain.TecFile;
import softline.proto.domain.TecMenu;
import softline.proto.domain.TecUser;
import softline.service.BondService;

// 逻辑层
@Service("bondService")
@Transactional
public class BondServiceImpl implements BondService {

	@Autowired
	private TecFileMapper tecFileMapper;
	
	@Autowired
	private TecFileVoMapper tecFileVoMapper;
	
	@Autowired
	private TecUserMapper tecUserMapper;
	
	@Autowired
	private TecMenuMapper tecMenuMapper;
	
	@Autowired
	private TecUserColumnVoMapper tecUserColumnVoMapper;

	@Autowired
	private  DivisionsMapper divisionsMapper;
	@Override
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return tecFileMapper.deleteByPrimaryKey(id);
	}

	@Override
	public int insert(TecFile record) {
		// TODO Auto-generated method stub
		return tecFileMapper.insert(record);
	}

	@Override
	public int insertSelective(TecFile record) {
		// TODO Auto-generated method stub
		return tecFileMapper.insertSelective(record);
	}

	@Override
	public TecFile selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		
		return tecFileMapper.selectByPrimaryKey(id);
	}

	@Override
	public int updateByPrimaryKeySelective(TecFile record) {
		// TODO Auto-generated method stub
		return tecFileMapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int updateByPrimaryKey(TecFile record) {
		
		return tecFileMapper.updateByPrimaryKey(record);
	}

	@Override
	public List<TecFileVo> selectByMidAndCid(TecFileVo tecFileVo) {
		 
		return tecFileVoMapper.selectByMidAndCid(tecFileVo);
	}

	@Override
	public List<TecFileVo> search(TecFileVo tecFileVo) {
		
		return tecFileVoMapper.search(tecFileVo) ;
	}


	@Override
	public TecUser doLogin(TecUser user) {
		// TODO Auto-generated method stub
		return tecUserMapper.doLogin(user);
	}

	

	@Override
	public List<TecMenu>  selectMenuByPid(Integer pid) {
		// TODO Auto-generated method stub
		return tecMenuMapper.selectMenuByPid(pid);
	}

	@Override
	public TecMenu selectByMenuId(Integer id) {
		// TODO Auto-generated method stub
		return tecMenuMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<TecUserColumnVo> selectZlByAcct(String acct) {
		// TODO Auto-generated method stub
		return tecUserColumnVoMapper.selectZlByAcct(acct);
	}

	@Override
	public TecMenu  selectPmenuByMenuId(Integer menuId) {
		// TODO Auto-generated method stub
		return tecMenuMapper.selectPmenuByMenuId( menuId);
	}

	@Override
	public void topTimeTask() {
		tecFileMapper.topTimeTask();
	}

	@Override
	public List<TecFileVo> selectAllByMenuPid(Map<String, Integer> map) {
		// TODO Auto-generated method stub
		return tecMenuMapper.selectAllByMenuPid(map);
	}

	@Override
	public List<TecMenu> selectAllMenu(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return tecMenuMapper.selectAllMenu(map);
	}

	@Override
	public List<TecFileVo> selectLatest(Map<String,Integer>map) {
		// TODO Auto-generated method stub
		return tecFileVoMapper.selectLatest(map);
	}

	@Override
	public List<TecFile> selectSchedule(Map<String, Integer> map) {
		// TODO Auto-generated method stub
		return tecFileMapper.selectSchedule(map);
	}

	@Override
	public List<TecFile> personActive() {
		// TODO Auto-generated method stub
		return tecFileMapper.personActive();
	}

	@Override
	public List<TecFile> noticeList() {
		// TODO Auto-generated method stub
		return tecFileMapper.noticeList();
	}

	@Override
	public int updateByPrimaryKeySelective(Divisions record) {
		// TODO Auto-generated method stub
		return divisionsMapper.updateByPrimaryKeySelective(record);
	}

	@Override
	public int insertSelective(Divisions record) {
		// TODO Auto-generated method stub
		return divisionsMapper.insertSelective(record);
	}

	@Override
	public List<Divisions> seletAllDivByMenu(Map<String,Integer>map) {
		// TODO Auto-generated method stub
		return divisionsMapper.seletAllDivByMenu(map);
	}

	@Override
	public Divisions selectDivByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return divisionsMapper.selectByPrimaryKey(id);
	}

	@Override
	public int deleteDivById(Integer id) {
		// TODO Auto-generated method stub
		return divisionsMapper.deleteByPrimaryKey(id);
	}

	
	
	
}
