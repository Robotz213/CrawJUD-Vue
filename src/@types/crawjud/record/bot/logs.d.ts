interface LogsBotRecord {
  row: number;
  message: string;
  type: string;
  total: number;
  remaining: number;
  success: number;
  errors: number;
  pid: string;
  status: string;
  start_time: string;
  messages: Record<string, string>[];
}
