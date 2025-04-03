import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function IdeaGenerator() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    const fetchAIResponse = async () => {
        if (!prompt.trim()) return;
        setLoading(true);
        setMessages([...messages, { role: "user", content: prompt }]);
        setPrompt("");

        try {
            const res = await fetch("https://api.together.xyz/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer 18d5957f6c79ce86334fcfbf67909adc6f9cb895d4ae01323a60444da08cd7e0"
                },
                body: JSON.stringify({
                    model: "deepseek-ai/DeepSeek-V3",
                    messages: [{ role: "user", content: prompt + " Format the response in Markdown for readability." }]
                })
            });
            
            const data = await res.json();
            const formattedResponse = data.choices[0].message.content;
            setMessages([...messages, { role: "user", content: prompt }, { role: "ai", content: formattedResponse }]);
        } catch (error) {
            setMessages([...messages, { role: "user", content: prompt }, { role: "ai", content: "❌ Error fetching response. Please try again." }]);
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl flex flex-col h-[500px]">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">💬 AI Chat</h1>
                <div className="flex-1 overflow-y-auto space-y-4 p-2 bg-gray-100 rounded-lg">
                    {messages.map((msg, index) => (
                        <div key={index} className={`max-w-xs p-3 rounded-lg ${msg.role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-gray-800 self-start"}`}>
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                    ))}
                    {loading && <p className="text-gray-500 text-sm">⏳ Generating response...</p>}
                </div>
                <div className="mt-3 flex space-x-2">
                    <input 
                        type="text"
                        placeholder="Type your message..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button 
                        onClick={fetchAIResponse}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        disabled={loading}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
