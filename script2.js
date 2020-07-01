/* ---- Dynamic Tabs Vertical Dark ----
Copyright (c) 2020 by Brittany Chiang (https://codepen.io/bchiang7/pen/mjzMbj)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', e => handleClick(e));

function handleClick(e) {
  const target = e.target;
  const tabNum = target.dataset.tab;
  const activeTab = document.querySelector('.tabs .active');
  const activeContent = document.querySelector(
    '.content .visible'
  );
  const currentContent = document.querySelector(
    `.content__section[data-tab='${tabNum}']`
  );
  
  if (!tabNum) {
    return;
  }
  
  activeTab.classList.remove('active');
  target.classList.add('active');
  activeContent.classList.remove('visible');
  currentContent.classList.add('visible');
}