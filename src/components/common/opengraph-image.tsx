import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export type Props = {
  title?: string;
};

export default async function OpengraphImage(props?: Props): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME || 'Tokyo Talkies'
    },
    ...props
  };

  let fonts: any[] = [];
  try {
    const fontData = readFileSync(join(process.cwd(), 'src/fonts/Inter-Bold.ttf'));
    fonts = [
      {
        name: 'Inter',
        data: fontData,
        style: 'normal',
        weight: 700
      }
    ];
  } catch (e) {
    console.warn('[OG Image] Could not load Inter-Bold.ttf, falling back to system font:', e);
  }

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-[#2e2e38]">
        <div tw="flex items-center justify-center border-2 border-[#dedeed] h-[140px] w-[140px] rounded-3xl bg-[#dedeed]">
          <span tw="text-8xl font-bold text-[#2e2e38]">T</span>
        </div>
        <p tw="mt-10 text-6xl font-bold text-white tracking-wide">{title}</p>
        <p tw="mt-2 text-2xl font-medium text-[#dedeed]">Modern Japanese & Western Fashion</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(fonts.length > 0 && { fonts })
    }
  );
}
