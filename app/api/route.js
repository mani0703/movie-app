
export async function GET() {
    try {
        const res = await fetch('https://ghibliapi.vercel.app/films');
        const data = await res.json();

        const imageUrls = data.map(img => img.image);
        return Response.json({ images: imageUrls });
    } catch (error) {
        return Response.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
