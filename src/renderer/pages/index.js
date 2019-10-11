import React from 'react';
import os from 'os';
import { Row, Col, Statistic, Descriptions } from 'antd';

export default () => {
  const totalmem = os.totalmem();
  const freemem = os.freemem();
  const cpus = os.cpus();

  return (
    <Row>
      <Col span={12}>
        <Statistic title='总内存' value={`${totalmem / 1024 / 1024}M`} />
      </Col>
      <Col span={12}>
        <Statistic title='可用内存' value={`${(freemem / 1024 / 1024).toFixed(2)}M`} />
      </Col>
      <Descriptions title='CPU 信息' bordered column={2}>
        {cpus.map((cpu, idx) =>
          <Descriptions.Item key={idx} label='处理器'>{cpu.model}</Descriptions.Item>
        )}
      </Descriptions>
    </Row>
  );
}
