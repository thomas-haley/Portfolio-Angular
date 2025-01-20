export interface ContactInquiry
{
    Id?: number;
    Name: string;
    Email: string;
    Type: string;
    Comment: string|null;
    CreatedDate?: string;
    Seen?: boolean;
}