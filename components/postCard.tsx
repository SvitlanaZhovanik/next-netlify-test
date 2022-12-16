import Image from "next/image"

type Props = {
  caption?: string
  media_url: string
  permalink: string
  media:string
}

const PostCard = ({ caption, media_url, permalink, media }: Props) => {
    return (<li className="max-w-[296px] md:max-w-[360px] xl:max-w-[356px] bg-[#FDFDFD]/30 border border-white rounded-[30px] backdrop-blur-sm p-5">
        <div className="flex gap-2 mb-5 items-center">
            {media !== "VIDEO" ? <Image src={media_url} alt="фото з instagram" width={132} height={132} className="rounded-[20px] object-cover h-[132px]" /> : <video controls src={media_url} width={132} height={132} className="rounded-[20px] object-cover h-[132px]">Sorry, your browser doesn't support embedded videos,
                but don't worry, you can <a href={media_url}>download it</a>
  and watch it with your favorite video player!  
            </video>}
        <h3 className="max-w-[176px] truncate text-black font-medium text-[16px] leading-[1.5]">{caption}</h3>
        </div>
        <a href={permalink} target="_blank" className="w-[200px] bg-rose-600 rounded-[30px] block text-center py-3 text-white font-medium text-[16px] leading-[1.5]">Дізнатися більше</a>
    </li>)
}

export default PostCard