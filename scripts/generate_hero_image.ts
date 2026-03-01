
import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

if (!apiKey) {
  console.error("GEMINI_API_KEY or API_KEY is not set");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function generate() {
  console.log("Generating image...");
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          {
            text: 'A high-quality, realistic close-up photo of a person sitting in a modern wheelchair, focusing on the wheels and legs. The person is wearing casual, comfortable clothing (jeans/pants). The lighting is natural, warm, and inviting, suggesting a positive and empowered atmosphere. The background is slightly blurred (bokeh) to emphasize the subject. Professional photography style, 4k resolution.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: "1K"
        }
      }
    });

    if (!response.candidates || !response.candidates[0].content.parts) {
      throw new Error("No image generated");
    }

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        const publicDir = path.resolve('public');
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true });
        }
        const filePath = path.join(publicDir, 'hero-wheelchair.png');
        fs.writeFileSync(filePath, buffer);
        console.log(`Image saved to ${filePath}`);
        return;
      }
    }
    console.error("No inline data found in response");
  } catch (error) {
    console.error("Error generating image:", error);
    process.exit(1);
  }
}

generate();
