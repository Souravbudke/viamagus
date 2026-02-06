import { IsString, IsNotEmpty, IsEnum, IsISO8601, IsOptional } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    description: string;

    @IsISO8601()
    @IsNotEmpty()
    due_date: string;

    @IsEnum(['OPEN', 'IN_PROGRESS', 'DONE'])
    @IsNotEmpty()
    status: string;

    @IsString()
    @IsOptional()
    assigneeId?: string;
}
