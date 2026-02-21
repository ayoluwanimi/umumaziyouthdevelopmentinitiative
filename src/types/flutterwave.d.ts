declare module 'flutterwave-react-v3' {
  export interface FlutterwaveConfig {
    public_key: string;
    tx_ref: string;
    amount: number;
    currency: string;
    payment_options?: string;
    customer: {
      email: string;
      phone_number?: string;
      name: string;
    };
    customizations?: {
      title?: string;
      description?: string;
      logo?: string;
    };
    meta?: Record<string, unknown>;
    redirect_url?: string;
  }

  export interface FlutterwaveResponse {
    status: string;
    transaction_id: number;
    tx_ref: string;
    flw_ref: string;
    currency: string;
    amount: number;
    charged_amount: number;
    customer: {
      name: string;
      email: string;
      phone_number: string;
    };
  }

  export interface FlutterwaveHookReturn {
    (options: {
      callback: (response: FlutterwaveResponse) => void;
      onClose: () => void;
    }): void;
  }

  export function useFlutterwave(config: FlutterwaveConfig): FlutterwaveHookReturn;
  export function closePaymentModal(): void;
}
