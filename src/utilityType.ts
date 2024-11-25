type Student = {
  age: number;
  name?: string;
  isStudent: boolean;
};

// 모든 타입을 옵셔널로 변경
type PartialType = Partial<Student>;

// 모든 타입을 필수로 변경
type RequiredType = Required<Student>;

// 모든 타입을 읽기전용으로 변경
type ReadonlyType = Readonly<Student>;

// 타입에서 일부를 픽해서 새로운 타입 반환
type PickType = Pick<Student, "age" | "name">;

// 타입에서 일부를 제외하고 새로운 타입 반환
type OmitType = Partial<Omit<Student, "age">>;

type Human = {
  name: string;
  address1: string;
  address2: string;
};

type RecordHuman = Record<"name" | "address1" | "address2", number>;
