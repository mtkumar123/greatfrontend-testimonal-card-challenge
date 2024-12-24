type testimonalCardProps = {
  image: string;
  name: string;
  username: string;
  message: string;
};

export default function TestimonalCard({
  image,
  name,
  username,
  message,
}: testimonalCardProps): React.ReactElement {
  return (
    <div className="flex flex-col p-[24px] flex space-y-[16px] w-[340px] max-w-[340px] bg-white">
      <div id="headline" className="flex space-x-[16px]">
        <img src={image} className="size-[48px]"></img>
        <div className="flex flex-col">
          <div className="font-semibold text-[18px] leading-[28px] text-[#171717] break-all">
            {name}
          </div>
          <div className="font-normal text-[14px] leading-[20px] text-[#525252]">
            {username}
          </div>
        </div>
      </div>
      <div id="body">{message}</div>
    </div>
  );
}
