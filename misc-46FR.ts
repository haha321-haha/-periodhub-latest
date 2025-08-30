export async function GET() {
    return Response.json({ message: "Premium content is not available yet." }, { status: 403 });
  }