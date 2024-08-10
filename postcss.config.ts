/*
 * @Author: dushuai
 * @Date: 2024-08-01 20:58:06
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-10 21:59:45
 * @Description: 描述
 */
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import type { AcceptedPlugin } from 'postcss';
import cssMacro from 'weapp-tailwindcss/css-macro/postcss';

const plugins: AcceptedPlugin[] = [tailwindcss(), autoprefixer()];

plugins.push(cssMacro);

export default plugins;

