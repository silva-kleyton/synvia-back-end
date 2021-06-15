
export default function verifyEnvironment(): string | undefined {
    switch (process.env.NODE_ENV) {
        case "local":
            return "local";
        case "develop":
            return "develop";
        case "production":
            return "production";
        default:
            break
    }
}