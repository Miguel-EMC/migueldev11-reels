import React from "react";

interface IconProps {
  size?: number;
  glow?: boolean;
}

// 1. Bedrock / AI Brain Circuitry
export const BedrockBrainIcon: React.FC<IconProps> = ({ size = 64, glow = true }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0F242A" stroke="#22D3EE" strokeWidth="2" />
    <path
      d="M26 20C22.6863 20 20 22.6863 20 26C20 27.5 20.5 28.8 21.3 29.8C20.5 30.8 20 32.1 20 33.5C20 34.9 20.5 36.2 21.3 37.2C20.5 38.2 20 39.5 20 41C20 44.3137 22.6863 47 26 47H28V17H26C26 18 26 19 26 20Z"
      stroke="#22D3EE"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M38 20C41.3137 20 44 22.6863 44 26C44 27.5 43.5 28.8 42.7 29.8C43.5 30.8 44 32.1 44 33.5C44 34.9 43.5 36.2 42.7 37.2C43.5 38.2 44 39.5 44 41C44 44.3137 41.3137 47 38 47H36V17H38Z"
      stroke="#22D3EE"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <line x1="32" y1="18" x2="32" y2="46" stroke="#00FF41" strokeWidth="2.5" strokeDasharray="3 3" />
    {/* Circuit nodes */}
    <circle cx="27" cy="26" r="2" fill="#00FF41" />
    <circle cx="37" cy="26" r="2" fill="#00FF41" />
    <circle cx="27" cy="38" r="2" fill="#00FF41" />
    <circle cx="37" cy="38" r="2" fill="#00FF41" />
    <circle cx="32" cy="32" r="3" fill="#22D3EE" />
  </svg>
);

// 2. AWS Lambda Neon Tool
export const LambdaNeonIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0D2314" stroke="#00FF41" strokeWidth="2" />
    <path
      d="M20 46L30 18H37L28 46H20Z"
      fill="#00FF41"
      opacity="0.25"
    />
    <path
      d="M20 46L30 18H37L28 46H20Z"
      stroke="#00FF41"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M34 46L41 33H47L40 46H34Z"
      stroke="#00FF41"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="#00FF41"
      opacity="0.2"
    />
    <line x1="31.5" y1="33" x2="36.5" y2="33" stroke="#00FF41" strokeWidth="2.5" />
  </svg>
);

// 3. OpenSearch Vector DB
export const OpenSearchVectorIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#231333" stroke="#C084FC" strokeWidth="2" />
    <rect x="18" y="32" width="6" height="14" rx="2" fill="#A855F7" />
    <rect x="27" y="24" width="6" height="22" rx="2" fill="#C084FC" />
    <rect x="36" y="18" width="6" height="28" rx="2" fill="#E9D5FF" />
    {/* Magnifying search glass */}
    <circle cx="36" cy="32" r="7" stroke="#22D3EE" strokeWidth="2.5" fill="#0A0E1A" fillOpacity="0.8" />
    <line x1="41" y1="37" x2="47" y2="43" stroke="#22D3EE" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 4. S3 Bucket
export const S3BucketIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0C261E" stroke="#10B981" strokeWidth="2" />
    <ellipse cx="32" cy="22" rx="13" ry="4.5" stroke="#34D399" strokeWidth="2.5" fill="#064E3B" />
    <path
      d="M19 22L23 43C23.5 45 27 46.5 32 46.5C37 46.5 40.5 45 41 43L45 22"
      stroke="#34D399"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M20 22C20 16 44 16 44 22"
      stroke="#6EE7B7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="2 2"
    />
  </svg>
);

// 5. User Avatar (Glowing Circle)
export const UserAvatarIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" stroke="#22D3EE" strokeWidth="2.5" fill="#082F49" />
    <circle cx="32" cy="25" r="7" stroke="#38BDF8" strokeWidth="2.5" fill="#0369A1" />
    <path
      d="M20 44C20 37.5 25 35 32 35C39 35 44 37.5 44 44"
      stroke="#38BDF8"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// 6. IAM Identity Card
export const IamIdIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#2E111A" stroke="#F43F5E" strokeWidth="2" />
    <rect x="16" y="20" width="32" height="24" rx="4" stroke="#FB7185" strokeWidth="2" />
    <circle cx="24" cy="30" r="3.5" stroke="#FDA4AF" strokeWidth="1.5" />
    <line x1="31" y1="27" x2="42" y2="27" stroke="#FDA4AF" strokeWidth="2" strokeLinecap="round" />
    <line x1="31" y1="33" x2="39" y2="33" stroke="#FDA4AF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 7. VPC Cloud + Shield
export const VpcShieldIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#1E1333" stroke="#8B5CF6" strokeWidth="2" />
    <path
      d="M20 32C17.79 32 16 33.79 16 36C16 38.21 17.79 40 20 40H42C44.76 40 47 37.76 47 35C47 32.35 44.95 30.18 42.34 30.02C41.87 25.5 38.07 22 33.4 22C29.67 22 26.47 24.23 25.04 27.5C24.4 27.2 23.7 27 23 27C20.65 27 18.66 28.62 18.15 30.82"
      stroke="#A78BFA"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M32 28L38 31V37C38 41 32 44 32 44C32 44 26 41 26 37V31L32 28Z"
      fill="#4C1D95"
      stroke="#C4B5FD"
      strokeWidth="1.8"
    />
  </svg>
);

// 8. EC2 Microchip / Compute
export const Ec2ChipIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#2D1A0B" stroke="#FF7A1A" strokeWidth="2" />
    <rect x="22" y="22" width="20" height="20" rx="3" stroke="#FB923C" strokeWidth="2" fill="#431407" />
    <rect x="27" y="27" width="10" height="10" rx="1" fill="#FF7A1A" />
    {/* Pins */}
    <line x1="26" y1="16" x2="26" y2="22" stroke="#FB923C" strokeWidth="2" />
    <line x1="32" y1="16" x2="32" y2="22" stroke="#FB923C" strokeWidth="2" />
    <line x1="38" y1="16" x2="38" y2="22" stroke="#FB923C" strokeWidth="2" />
    <line x1="26" y1="42" x2="26" y2="48" stroke="#FB923C" strokeWidth="2" />
    <line x1="32" y1="42" x2="32" y2="48" stroke="#FB923C" strokeWidth="2" />
    <line x1="38" y1="42" x2="38" y2="48" stroke="#FB923C" strokeWidth="2" />
    <line x1="16" y1="26" x2="22" y2="26" stroke="#FB923C" strokeWidth="2" />
    <line x1="16" y1="32" x2="22" y2="32" stroke="#FB923C" strokeWidth="2" />
    <line x1="16" y1="38" x2="22" y2="38" stroke="#FB923C" strokeWidth="2" />
    <line x1="42" y1="26" x2="48" y2="26" stroke="#FB923C" strokeWidth="2" />
    <line x1="42" y1="32" x2="48" y2="32" stroke="#FB923C" strokeWidth="2" />
    <line x1="42" y1="38" x2="48" y2="38" stroke="#FB923C" strokeWidth="2" />
  </svg>
);

// 9. DynamoDB Cylinder + Lightning
export const DynamoDbCylinderIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0C1D38" stroke="#3B82F6" strokeWidth="2" />
    <ellipse cx="32" cy="22" rx="13" ry="5" stroke="#60A5FA" strokeWidth="2" />
    <path d="M19 22V32C19 35 25 37 32 37C39 37 45 35 45 32V22" stroke="#60A5FA" strokeWidth="2" />
    <path d="M19 32V42C19 45 25 47 32 47C39 47 45 45 45 42V32" stroke="#60A5FA" strokeWidth="2" />
    {/* Lightning Bolt */}
    <path d="M35 23L27 34H33L29 44L39 31H33L35 23Z" fill="#38BDF8" stroke="#0A0E1A" strokeWidth="1" />
  </svg>
);

// 10. API Gateway Brackets
export const ApiGatewayHexIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#2A0E2A" stroke="#EC4899" strokeWidth="2" />
    <path
      d="M32 16L46 24V40L32 48L18 40V24L32 16Z"
      stroke="#F472B6"
      strokeWidth="2"
      fill="#500724"
    />
    <path d="M26 29L22 32L26 35" stroke="#FDF2F8" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M38 29L42 32L38 35" stroke="#FDF2F8" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="33" y1="28" x2="31" y2="36" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 11. Terraform 3D Isometric
export const Terraform3DIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#171233" stroke="#6366F1" strokeWidth="2" />
    <polygon points="21,17 31,23 31,35 21,29" fill="#818CF8" />
    <polygon points="33,24 43,30 43,42 33,36" fill="#A5B4FC" />
    <polygon points="33,44 43,50 43,62 33,56" fill="#6366F1" transform="translate(0,-16)" />
    <polygon points="21,37 31,43 31,55 21,49" fill="#4F46E5" transform="translate(0,-6)" />
  </svg>
);

// 12. CI/CD Pipeline Workflow
export const CicdPipelineIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0C272C" stroke="#06B6D4" strokeWidth="2" />
    <circle cx="22" cy="32" r="4" stroke="#22D3EE" strokeWidth="2" fill="#083344" />
    <circle cx="34" cy="24" r="4" stroke="#22D3EE" strokeWidth="2" fill="#083344" />
    <circle cx="34" cy="40" r="4" stroke="#22D3EE" strokeWidth="2" fill="#083344" />
    <circle cx="45" cy="32" r="4" stroke="#00FF41" strokeWidth="2" fill="#064E3B" />
    {/* Arrows */}
    <path d="M26 30L30 26" stroke="#22D3EE" strokeWidth="2" />
    <path d="M26 34L30 38" stroke="#22D3EE" strokeWidth="2" />
    <path d="M38 26L42 30" stroke="#22D3EE" strokeWidth="2" />
    <path d="M38 38L42 34" stroke="#00FF41" strokeWidth="2" />
  </svg>
);

// 13. SageMaker AI Network
export const SageMakerNetworkIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0B2625" stroke="#14B8A6" strokeWidth="2" />
    <circle cx="32" cy="32" r="8" stroke="#2DD4BF" strokeWidth="2" fill="#115E59" />
    <circle cx="20" cy="22" r="4" stroke="#5EEAD4" strokeWidth="2" />
    <circle cx="44" cy="22" r="4" stroke="#5EEAD4" strokeWidth="2" />
    <circle cx="20" cy="42" r="4" stroke="#5EEAD4" strokeWidth="2" />
    <circle cx="44" cy="42" r="4" stroke="#5EEAD4" strokeWidth="2" />
    <line x1="23" y1="24" x2="26" y2="28" stroke="#2DD4BF" strokeWidth="1.5" />
    <line x1="41" y1="24" x2="38" y2="28" stroke="#2DD4BF" strokeWidth="1.5" />
    <line x1="23" y1="40" x2="26" y2="36" stroke="#2DD4BF" strokeWidth="1.5" />
    <line x1="41" y1="40" x2="38" y2="36" stroke="#2DD4BF" strokeWidth="1.5" />
  </svg>
);

// 14. FastAPI Circle Lightning
export const FastApiCircleIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#062E27" stroke="#00FF41" strokeWidth="2" />
    <circle cx="32" cy="32" r="16" fill="#00FF41" fillOpacity="0.2" stroke="#00FF41" strokeWidth="2" />
    <path d="M33 20L25 33H32L30 44L40 30H33L35 20H33Z" fill="#00FF41" />
  </svg>
);

// 15. Async Python Lightning
export const AsyncLightningIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0C2619" stroke="#10B981" strokeWidth="2" />
    <path d="M34 18L26 31H32L29 44L40 29H33L36 18H34Z" fill="#34D399" />
  </svg>
);

// 16. Pydantic Shield
export const PydanticShieldIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0A241C" stroke="#059669" strokeWidth="2" />
    <path
      d="M32 18L44 24V34C44 41 32 46 32 46C32 46 20 41 20 34V24L32 18Z"
      fill="#047857"
      stroke="#10B981"
      strokeWidth="2"
    />
    <path d="M28 32L31 35L37 27" stroke="#ECFDF5" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 17. Structured Outputs / JSON Schema
export const StructuredOutputIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#08252C" stroke="#06B6D4" strokeWidth="2" />
    <rect x="18" y="20" width="10" height="8" rx="2" fill="#083344" stroke="#22D3EE" strokeWidth="1.5" />
    <rect x="18" y="36" width="10" height="8" rx="2" fill="#083344" stroke="#22D3EE" strokeWidth="1.5" />
    <rect x="36" y="28" width="12" height="8" rx="2" fill="#047857" stroke="#00FF41" strokeWidth="1.5" />
    <path d="M28 24H32V32H36" stroke="#22D3EE" strokeWidth="2" fill="none" />
    <path d="M28 40H32V32" stroke="#22D3EE" strokeWidth="2" fill="none" />
  </svg>
);

// 18. Function / Tool Calling
export const FunctionCallingIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#092922" stroke="#00FF41" strokeWidth="2" />
    <rect x="18" y="22" width="14" height="14" rx="3" stroke="#34D399" strokeWidth="2" />
    <rect x="34" y="30" width="14" height="14" rx="3" stroke="#22D3EE" strokeWidth="2" />
    {/* Bi-directional arrows */}
    <path d="M32 25H41V29L45 25L41 21V25" stroke="#00FF41" strokeWidth="1.8" />
    <path d="M32 41H23V37L19 41L23 45V41" stroke="#22D3EE" strokeWidth="1.8" />
  </svg>
);

// 19. Embeddings Vector Space
export const EmbeddingsVectorsIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#092823" stroke="#10B981" strokeWidth="2" />
    <circle cx="32" cy="32" r="4" fill="#00FF41" />
    <line x1="32" y1="32" x2="20" y2="20" stroke="#34D399" strokeWidth="2" />
    <polygon points="20,24 20,20 24,20" fill="#34D399" />
    <line x1="32" y1="32" x2="44" y2="20" stroke="#34D399" strokeWidth="2" />
    <polygon points="44,24 44,20 40,20" fill="#34D399" />
    <line x1="32" y1="32" x2="20" y2="44" stroke="#34D399" strokeWidth="2" />
    <polygon points="20,40 20,44 24,44" fill="#34D399" />
    <line x1="32" y1="32" x2="44" y2="44" stroke="#34D399" strokeWidth="2" />
    <polygon points="44,40 44,44 40,44" fill="#34D399" />
  </svg>
);

// 20. Pinecone / Vector Cluster
export const PineconeClusterIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0D2E1C" stroke="#22C55E" strokeWidth="2" />
    <circle cx="32" cy="22" r="3" fill="#86EFAC" />
    <circle cx="26" cy="28" r="3" fill="#4ADE80" />
    <circle cx="38" cy="28" r="3" fill="#4ADE80" />
    <circle cx="22" cy="36" r="3" fill="#22C55E" />
    <circle cx="32" cy="35" r="4" fill="#00FF41" />
    <circle cx="42" cy="36" r="3" fill="#22C55E" />
    <circle cx="28" cy="44" r="3" fill="#16A34A" />
    <circle cx="36" cy="44" r="3" fill="#16A34A" />
  </svg>
);

// 21. Hybrid Search
export const HybridSearchIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#082728" stroke="#06B6D4" strokeWidth="2" />
    <circle cx="30" cy="30" r="11" stroke="#22D3EE" strokeWidth="2.5" fill="#083344" />
    <line x1="38" y1="38" x2="48" y2="48" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" />
    <path d="M26 30H34M30 26V34" stroke="#00FF41" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 22. LangGraph State Nodes
export const LangGraphIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0D271D" stroke="#00FF41" strokeWidth="2" />
    <circle cx="22" cy="24" r="4" stroke="#34D399" strokeWidth="2" fill="#064E3B" />
    <circle cx="42" cy="24" r="4" stroke="#34D399" strokeWidth="2" fill="#064E3B" />
    <circle cx="32" cy="42" r="5" stroke="#00FF41" strokeWidth="2.5" fill="#022C22" />
    {/* Cyclic Loop */}
    <path d="M26 24H38" stroke="#34D399" strokeWidth="2" />
    <path d="M41 28L35 39" stroke="#34D399" strokeWidth="2" />
    <path d="M29 39L23 28" stroke="#00FF41" strokeWidth="2" />
  </svg>
);

// 23. AutoGen Multi-Agent
export const AutoGenAgentIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0E232F" stroke="#0284C7" strokeWidth="2" />
    <circle cx="32" cy="22" r="5" stroke="#38BDF8" strokeWidth="2" fill="#0C4A6E" />
    <circle cx="20" cy="42" r="4" stroke="#38BDF8" strokeWidth="2" fill="#0C4A6E" />
    <circle cx="44" cy="42" r="4" stroke="#38BDF8" strokeWidth="2" fill="#0C4A6E" />
    <line x1="30" y1="26" x2="22" y2="39" stroke="#38BDF8" strokeWidth="1.8" />
    <line x1="34" y1="26" x2="42" y2="39" stroke="#38BDF8" strokeWidth="1.8" />
    <line x1="24" y1="42" x2="40" y2="42" stroke="#00FF41" strokeWidth="1.8" strokeDasharray="2 2" />
  </svg>
);

// 24. Model Context Protocol (MCP)
export const McpProtocolIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#062624" stroke="#00FF41" strokeWidth="2" />
    <rect x="18" y="18" width="28" height="28" rx="6" stroke="#22D3EE" strokeWidth="2" fill="#042F2E" />
    <text
      x="32"
      y="37"
      fontFamily="monospace"
      fontSize="16"
      fontWeight="900"
      fill="#00FF41"
      textAnchor="middle"
    >
      MC
    </text>
  </svg>
);

// 25. Guardrails Security Shield
export const GuardrailsShieldIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#281119" stroke="#F43F5E" strokeWidth="2" />
    <path
      d="M32 18L44 24V34C44 41 32 46 32 46C32 46 20 41 20 34V24L32 18Z"
      fill="#4C0519"
      stroke="#FB7185"
      strokeWidth="2"
    />
    <circle cx="32" cy="30" r="3" fill="#FDA4AF" />
    <rect x="29" y="32" width="6" height="5" rx="1" fill="#FDA4AF" />
  </svg>
);

// 26. Step Functions Multi-Step Orchestrator
export const StepFunctionsIcon: React.FC<IconProps> = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#0C2530" stroke="#06B6D4" strokeWidth="2" />
    <rect x="14" y="26" width="10" height="12" rx="2" fill="#083344" stroke="#22D3EE" strokeWidth="1.5" />
    <line x1="24" y1="32" x2="30" y2="32" stroke="#22D3EE" strokeWidth="2" />
    <polygon points="30,30 33,32 30,34" fill="#22D3EE" />
    <rect x="33" y="26" width="10" height="12" rx="2" fill="#064E3B" stroke="#00FF41" strokeWidth="1.5" />
    <line x1="43" y1="32" x2="49" y2="32" stroke="#00FF41" strokeWidth="2" />
    <polygon points="49,30 52,32 49,34" fill="#00FF41" />
    <rect x="52" y="26" width="7" height="12" rx="2" fill="#083344" stroke="#22D3EE" strokeWidth="1.5" />
  </svg>
);

