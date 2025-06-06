// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
	namespace ioBroker {
		interface AdapterConfig {
			account: string;
            password: string;
            pollInterval: number;
		}
		interface StateDefinition {
            id: string;
            name: string;
            type: 'number' | 'string' | 'boolean' | 'array' | 'object';
            role: string;
            unit?: string;
            read: boolean;
            write: boolean;
            states?: Record<string, string>;
        }
	}
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};
