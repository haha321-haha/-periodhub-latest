export async function POST(request) {
    const { prompt } = await request.json();
  
    // 替换为您的图片生成 API
    const API_KEY = process.env.IMAGE_API_KEY;
    const API_URL = 'https://api.example.com/generate'; // 替换为实际 API 地址
  
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ prompt }),
      });
  
      const data = await response.json();
      return Response.json({ image: data.image_url }); // 假设返回的字段是 image_url
    } catch (error) {
      console.error('Error calling image generation API:', error);
      return Response.json({ error: 'Failed to generate image' }, { status: 500 });
    }
  }