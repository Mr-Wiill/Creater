package softline.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import softline.proto.dao.TecOperationLogsMapper;

import softline.proto.domain.TecOperationLogs;
import softline.service.ILogService;

@Service("logService")
public class LogServiceImpl implements ILogService  {

	@Autowired
	private TecOperationLogsMapper tecOperationLogsMapper;
	
	
	@Override
	public void operationLog(TecOperationLogs log) {
		// TODO Auto-generated method stub
		tecOperationLogsMapper.insert(log);
	}

	

}
