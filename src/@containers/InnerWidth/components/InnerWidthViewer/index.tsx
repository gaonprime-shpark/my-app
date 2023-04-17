import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { InnerWidthValueAtom } from '../../state';
import { useRendersCount } from 'react-use';
const InnerWidthViewer = () => {
  const setInnerWidthValue = useSetRecoilState(InnerWidthValueAtom);
  const InnerWidthValue = useRecoilValue(InnerWidthValueAtom);
  const rendersCount = useRendersCount();

  useEffect(() => {
    setInnerWidthValue(window.innerWidth);
    const setCurrentSize = () => {
      //   setSize(window.innerWidth);
      console.log('set Atom');
      setInnerWidthValue(window.innerWidth);
    };
    window.addEventListener('resize', setCurrentSize);
    return () => {
      window.removeEventListener('resize', setCurrentSize);
    };
  }, []);

  return (
    <>
      {InnerWidthValue} - rendersCount : {rendersCount}
    </>
  );
};

export { InnerWidthViewer };
