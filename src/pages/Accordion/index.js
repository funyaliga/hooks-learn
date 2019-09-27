import React, { useState } from 'react';

const list = [
  { title: '佛兰德镜子', content: '在神秘的境界里，眼睛挨着眼睛，镜子对着镜子，形象贴着形象…… ——扬•凡•吕斯布鲁克《永福之镜》 请允许我给你讲故事。在头被砍下，肢体四散之前，没有什么比故事更重要了；人们不会杀死没讲完故事的人。我看到夜的正中央是一棵发光的椴树，每片叶子比一千把火炬还要刺眼。树下的人胸中有千面形象，每张脸上有无数眼睛。在这个人人谈论虚无和荒漠的城市里，一颗实实在在的心...' },
  { title: '82年生的金智英', content: '只有你们家人团聚很重要吗？我们也是除了过节以外，没有别的机会可以聚在一起好好看看三个孩子。最近年轻人不都是这样吗？既然你们的女儿可以回娘家，那也应该让我们的女儿回来才对吧！' },
  { title: '在别人的句子里', content: '几年前，有本叫Reality Hunger的书很热闹，“现实馋”，作者对小说家造世界、编故事的古旧形式不耐烦，显然共鸣的人不少。他觉得真实的体验已经足够给作家发挥了，比如，一句典型的挑衅：《无尽的玩笑》（Infinite Jest）谁真的喜欢，连给大卫·福斯特·华莱士写传记的人，平时也只提他的非虚构杂文。' },
];

function Accordion() {
  const [isActivePanel, setActivePanel] = useState({});
  const toggleItem = (key) => {
    setActivePanel((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };
  return (
    <ul>
      { list.map(({ title, content }, index) => {
        const isOpen = isActivePanel[index];
        return (
          <li key={index.toString()} onClick={() => toggleItem(index)}>
            <h3>{title}</h3>
            { isOpen && <p>{content}</p>}
          </li>
        );
      })}
    </ul>
  );
}

export default Accordion;
