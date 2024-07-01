import { TMDB_BASE_URL } from '@/constants';
import { MediaContent } from '@/interfaces';

import { TimeWindow, ContentType } from '@/types';

interface TrendingAllParams {
  params: {
    timeWindow: TimeWindow,
    type: ContentType,
  };
}

export async function GET(request: Request, { params }: TrendingAllParams) {
  const { searchParams } = new URL(request.url);
  const { timeWindow, type } = params
  const language = searchParams.get('language') ?? 'en-US';

  try {
    const fetchedContent = await fetch(
      `${TMDB_BASE_URL}/trending/${type}/${timeWindow}?language=${language}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        },
      }
    );

    if (!fetchedContent.ok) {
      throw new Error();
    }

    const content: MediaContent = await fetchedContent.json();

    return Response.json({ ...content });
  } catch (error) {
    return new Response('', { status: 500 });
  }
}