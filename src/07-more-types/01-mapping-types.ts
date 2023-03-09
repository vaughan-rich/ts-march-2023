{
    interface Options {
        subtitles: boolean;
        volume: number;
    }

    interface ReadOnlyOptions {
        readonly subtitles: boolean;
        readonly volume: number;
    }

    interface OptionalOptions {
        subtitles?: boolean;
        volume?: number;
    }

    interface NullableOptions {
        subtitle: boolean | null;
        volume: number | null;
    }

}
{
    // the above is the most verbose way to do things in those 3 scenarios,
    // but what if we want to reuse a type without having to retype it all?

    interface Options {
        subtitles: boolean;
        volume: number;
    }

    type ReadOnlyMapper<T> = {readonly [k in keyof T]: T[k] };
    type ReadOnlyOptions = ReadOnlyMapper<Options>

    type OptionalMapper<T> = { [k in keyof T]?: T[k] };
    type OptionalOptions = OptionalMapper<Options>

    type NullableMapper<T> = { [k in keyof T]: T[k] | null };
    type NullableOptions = NullableMapper<Options>

}
{
    // because some of these are so common, there are built in utility types to help you out

    interface Options {
        subtitles: boolean;
        volume: number;
        brightness: number;
    }

    type ReadOnlyOptions = Readonly<Options> // built in readonly type from typescript
    type OptionalOptions = Partial<Options>  // built in optional type from typescript

    // others include Required, Awaited, Pick, ReturnType
}