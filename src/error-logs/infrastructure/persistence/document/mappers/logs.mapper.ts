import { Logs } from "@/error-logs/domain/logs";
import { LogsSchemaClass } from '../entities/logs.schema';

export class LogsMapper {
  static toDomain(raw: LogsSchemaClass): Logs {
    const logs = new Logs();
    logs.id = raw.id;
    logs.message = raw.message;
    logs.method = raw.method;
    logs.path = raw.path;
    logs.payload = raw.payload;
    logs.stack = raw.stack;
    logs.status = raw.status;

    return logs;
  }

  static toPersistence(logs: Logs): LogsSchemaClass {
    const logsEntity = new LogsSchemaClass();

    logsEntity.message = logs.message;
    logsEntity.method = logs.method;
    logsEntity.path = logs.path;
    logsEntity.stack = logs.stack;
    logsEntity.payload = logs.payload;
    logsEntity.status = logs.status;
    
    return logsEntity;
  }
}