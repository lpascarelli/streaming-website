import { TMDB_BASE_URL } from "@/constants";
import { MediaContent } from "@/interfaces";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') ?? 1;
  const language = searchParams.get('language') ?? 'en-US';

    try {
      const fetchedMovies = await fetch(
        `${TMDB_BASE_URL}/movie/popular?language=${language}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
          },
        }
      );

      if (!fetchedMovies.ok) {
        throw new Error();
      }

      const movies: MediaContent = await fetchedMovies.json();

      return Response.json({ ...movies });
    } catch (error) {
      return new Response('', { status: 500 });
    }
}
