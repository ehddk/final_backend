type Student = {
    age: number;
    name?: string;
    isStudent: boolean;
};
type PartialType = Partial<Student>;
type RequiredType = Required<Student>;
type ReadonlyType = Readonly<Student>;
type PickType = Pick<Student, "age" | "name">;
type OmitType = Partial<Omit<Student, "age">>;
type Human = {
    name: string;
    address1: string;
    address2: string;
};
type RecordHuman = Record<"name" | "address1" | "address2", number>;
