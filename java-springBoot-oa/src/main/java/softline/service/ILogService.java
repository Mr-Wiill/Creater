package softline.service;


import softline.proto.domain.TecOperationLogs;

public interface ILogService {
	
   
	void operationLog(TecOperationLogs log);
}
