import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMENAI_API_KEY)

export async function POST(request) {
  try {
    const { message, context } = await request.json()

    if (!message) {
      return Response.json({ error: "Message is required" }, { status: 400 })
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    const prompt = `${context}

User message: ${message}

Please provide a helpful, friendly response. Keep it concise but informative. If the user asks about Shiridhar's work, services, or skills, provide relevant information based on the context provided.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return Response.json({ message: text })
  } catch (error) {
    console.error("Error generating response:", error)
    return Response.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
