import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';
import Logo from '../layout/Logo';

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
      <div tw="flex h-full w-full flex-col items-center justify-center bg-black">
        <div tw="flex flex-none items-center justify-center border border-neutral-700 h-[160px] w-[160px] rounded-3xl">
          <Logo size="sm" />
        </div>
        <p tw="mt-12 text-6xl font-bold text-white">{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      ...(fonts.length > 0 && { fonts })
    }
  );
}
