/*
 * @Author: Jack Zhuang 50353452+hotlong@users.noreply.github.com
 * @Date: 2024-06-10 18:44:27
 * @LastEditors: Jack Zhuang 50353452+hotlong@users.noreply.github.com
 * @LastEditTime: 2024-06-10 22:27:36
 */
'use client';

import { useEffect, useState } from 'react';
import {antdData} from 'amis-theme-editor-helper';

export function RenderEditor(props: any) {
  const [Editor, setEditor] = useState<any>(null);

  useEffect(() => {
    // 动态导入 amis-editor
    import('amis-editor').then((mod:any) => {
      setEditor(mod);
    });
  }, []);


  useEffect(() => {
    if(Editor) {
      Editor.setThemeConfig('antd', antdData);
    }
  }, [Editor]);
  return (
    <div className='h-full flex flex-col flex-1'>
      <div className='dark'>
        <div className="text-gray-900 dark:text-white bg-white dark:bg-gray-900 flex-shrink-0 h-16 relative z-20 flex-none py-3 px-4 flex items-center space-x-4 antialiased">
        </div>
      </div>
      <main id="amisModalContainer" className=" flex-1 overflow-auto flex-auto relative ">
        {!Editor ?<div>Loading...</div> : (
          <Editor.Editor
            className="h-full w-full"
            showCustomRenderersPanel={true}
            theme="antd"
            />
          ) 
        }
      </main>
    </div>
  )

}