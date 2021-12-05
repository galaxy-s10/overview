import { memo, useState, useEffect } from 'react';
import { Table } from 'antd';
import styles from './index.css';
import { generatorCss } from '@/libs/themeSystem/index';
import { getThemeList } from '@/services/theme';

const ThemeSystem = () => {
  const [tableData, setTableData] = useState<any[]>([
    {
      id: 1,
      model: 'dark',
      key: '--color-btn-1',
      value: 'red',
      lang: 'zh',
      createdAt: '2021-11-23T17:13:51.000Z',
      updatedAt: '2021-11-23T17:13:51.000Z',
    },
  ]);
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '模块',
      dataIndex: 'model',
    },
    {
      title: '语言',
      dataIndex: 'lang',
    },
    {
      title: 'key',
      dataIndex: 'key',
    },
    {
      title: 'value',
      dataIndex: 'value',
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
    },
    {
      title: 'updatedAt',
      dataIndex: 'updatedAt',
    },
  ];
  const hiax = (v: object) => {
    const a = 11;
    console.log(111, v);
  };
  useEffect(() => {
    console.log('==');
    getThemeList().then((res) => {
      console.log(res.result.rows[0]);
      setTableData(res.result.rows);
    });
    // generatorCss(`
    //   :root{
    //     --color-btn-3:yellow;
    //     --color-btn-4:pink
    //   }
    // `);
  }, []);
  return (
    <div>
      <h1>文案系统</h1>
      <Table columns={columns} dataSource={tableData} />
      <div className={styles.colorfulDiv1}>div1</div>
      <div className={styles.colorfulDiv2}>div2</div>
    </div>
  );
};
export default memo(ThemeSystem);
