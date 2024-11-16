import { useParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import * as M from './MovieDetailStyle';

const MovieDetail = () => {
    const { movieId } = useParams();

    // 영화 정보와 출연진 정보를 가져오는 커스텀 훅
    const { data: movie, isLoading: movieLoading, isError: movieError } = useCustomFetch(
        `/movie/${movieId}?language=ko-KR`
    );

    const { data: credits, isLoading: creditsLoading, isError: creditsError } = useCustomFetch(
        `/movie/${movieId}/credits?language=ko-KR`
    );

    // 데이터 로딩 중 표시
    if (movieLoading || creditsLoading) return <p>Loading...</p>;

    // 오류 처리
    if (movieError || creditsError) return <p>Error loading data.</p>;

    // 영화 데이터에서 필요한 정보 추출
    const {
        title = '제목 정보 없음',
        backdrop_path,
        vote_average = '정보 없음',
        release_date,
        runtime = '정보 없음',
        tagline = '태그라인 정보 없음',
        overview = '개요 정보 없음',
    } = movie || {};
    const cast = credits?.cast || [];

    return (
        <M.DetailContainer>
            <M.MovieDetailContainer
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path || ''})` }}
            >
                <M.MovieContent>
                    <h1>{title}</h1>
                    <p>{vote_average}</p>
                    <p>{release_date ? new Date(release_date).getFullYear() : '정보 없음'}</p>
                    <p>{runtime}</p>
                    <h3>{tagline}</h3>
                    <p>{overview}</p>
                </M.MovieContent>
            </M.MovieDetailContainer>

            <M.CrewContainer>
                <h2>감독 / 출연</h2>
                <M.CastList>
                    {cast.length > 0 ? (
                        cast.map((person) => (
                            <M.CastItem key={person.id}>
                                <M.CastImage
                                    src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                                    alt={person.name}
                                />
                                <M.CastName>{person.name}</M.CastName>
                                <M.CastRole>{person.job === 'Director' ? '감독' : person.character}</M.CastRole>
                            </M.CastItem>
                        ))
                    ) : (
                        <p>출연진 정보가 없습니다.</p>
                    )}
                </M.CastList>
            </M.CrewContainer>
        </M.DetailContainer>
    );
};

export default MovieDetail;
