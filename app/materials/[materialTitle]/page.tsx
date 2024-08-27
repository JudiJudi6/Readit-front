import { getArticleInfoBySlug } from '@/app/_actions/articlesActions';
import ManageArticle from '@/app/_components/materials/ManageArticle';
import MaterialDetails from '@/app/_components/materials/MaterialDetails';
import MaterialHeader from '@/app/_components/materials/MaterialHeader';
import OpinionSection from '@/app/_components/materials/OpinionSection';
import { Suspense } from 'react';

export const revalidate = 0;

interface Params {
	params: { materialTitle: string };
	searchParams: any;
}

export async function generateMetadata({ params }: Params) {
	const { title } = await getArticleInfoBySlug({
		slug: params?.materialTitle,
	});

	return { title: `${title}` };
}

export default async function Page({ params, searchParams }: Params) {
	const {
		title,
		summary,
		tags,
		is_free,
		price,
		id,
		author: { first_name, last_name, avatar_url },
		created_at,
		view_count,
		title_image_url,
		rating,
		rating_count,
	} = await getArticleInfoBySlug({
		slug: params?.materialTitle,
	});
	const author = first_name + ' ' + last_name;
	const convertedTags = tags.map((tag: { value: string }) => tag.value);

	return (
		<div className='py-8 md:py-16 md:px-10 px-4 max-w-[1800px] w-screen mx-auto flex flex-col gap-5 md:gap-10 '>
			<MaterialHeader
				imageLink={title_image_url}
				summary={summary}
				tags={convertedTags}
				title={title}
			/>
			<div className='flex flex-col md:flex-row-reverse'>
				<div className='px-8 py-10 md:border-l-2 border-mainGreen'>
					<ManageArticle is_free={is_free} price={price} articleId={id} />
					<MaterialDetails
						author={author}
						authorAvatarLink={avatar_url}
						date={new Date(created_at)}
						rateCount={rating_count}
						rating={rating}
						viewCount={view_count}
					/>
				</div>
				<div className='flex-1 px-8 flex flex-col gap-6'>
					<p className='text-3xl font-medium mb-5'>Opinie</p>
					<Suspense
						fallback={<div className='mx-auto'>Ładowanie opinii...</div>}
						key={id}
					>
						<OpinionSection articleId={id} searchParams={searchParams} />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
