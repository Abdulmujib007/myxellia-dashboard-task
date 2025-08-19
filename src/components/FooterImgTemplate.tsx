interface Props {
  bgImg: string;
  progressionImg: string;
  text1: string;
  text2: string;
}

function FooterImgTemplate({ bgImg, progressionImg, text1, text2 }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`flex grow flex-col gap-2 justify-end h-[17.9rem] rounded-xl pb-2 bg-no-repeat bg-cover text-white`}
    >
      <p className="flex flex-col ml-4">
        <span className="font-medium text-[0.875rem] ">{text1}</span>
        <span className="font-semibold text-[1.125rem] ">{text2}</span>
      </p>
      <img className="flex mx-auto" src={progressionImg} alt="" />
    </div>
  );
}

export default FooterImgTemplate;
