import { useEffect, useState } from "react";

function useFontsReady() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsReady(true));
    return () => {
      document.fonts.ready.then(() => {});
    };
  }, []);

  return fontsReady;
}

export default function LoadingCover() {
  const loading = useFontsReady();

  return loading ? (
    <div className="fixed left-0 top-0 h-full w-full z-10 flex flex-col justify-center items-center backdrop-blur-lg">
      <h2 className="text-3xl font-black">加载中，请稍候……</h2>
      <p className="mt-6 font-bold">字体是文字排版的灵魂。</p>
      <p className="mt-2">为了保证显示效果，请等待字体加载完成。</p>
    </div>
  ) : null;
}
