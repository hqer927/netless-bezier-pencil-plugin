import { EASINGS } from './easings';
/** @public */
export class Vec2d {
    constructor(x = 0, y = 0, z = 1) {
        Object.defineProperty(this, "x", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: x
        });
        Object.defineProperty(this, "y", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: y
        });
        Object.defineProperty(this, "z", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: z
        });
    }
    get XY() {
        return [this.x, this.y];
    }
    setz(z) {
        this.z = z;
        return this;
    }
    setXY(x = this.x, y = this.y) {
        this.x = x;
        this.y = y;
        return this;
    }
    set(x = this.x, y = this.y, z = this.z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    setTo({ x = 0, y = 0, z = 1 }) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    rot(r) {
        if (r === 0)
            return this;
        const { x, y } = this;
        const s = Math.sin(r);
        const c = Math.cos(r);
        this.x = x * c - y * s;
        this.y = x * s + y * c;
        return this;
    }
    rotWith(C, r) {
        if (r === 0)
            return this;
        const x = this.x - C.x;
        const y = this.y - C.y;
        const s = Math.sin(r);
        const c = Math.cos(r);
        this.x = C.x + (x * c - y * s);
        this.y = C.y + (x * s + y * c);
        return this;
    }
    clone() {
        const { x, y, z } = this;
        return new Vec2d(x, y, z);
    }
    sub(V) {
        this.x -= V.x;
        this.y -= V.y;
        return this;
    }
    subXY(x, y) {
        this.x -= x;
        this.y -= y;
        return this;
    }
    subScalar(n) {
        this.x -= n;
        this.y -= n;
        // this.z -= n
        return this;
    }
    add(V) {
        this.x += V.x;
        this.y += V.y;
        return this;
    }
    addXY(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }
    addScalar(n) {
        this.x += n;
        this.y += n;
        // this.z += n
        return this;
    }
    clamp(min, max) {
        this.x = Math.max(this.x, min);
        this.y = Math.max(this.y, min);
        if (max !== undefined) {
            this.x = Math.min(this.x, max);
            this.y = Math.min(this.y, max);
        }
        return this;
    }
    div(t) {
        this.x /= t;
        this.y /= t;
        // this.z /= t
        return this;
    }
    divV(V) {
        this.x /= V.x;
        this.y /= V.y;
        // this.z /= V.z
        return this;
    }
    mul(t) {
        this.x *= t;
        this.y *= t;
        // this.z *= t
        return this;
    }
    mulV(V) {
        this.x *= V.x;
        this.y *= V.y;
        // this.z *= V.z
        return this;
    }
    abs() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    }
    nudge(B, distance) {
        const tan = Vec2d.Tan(B, this);
        return this.add(tan.mul(distance));
    }
    neg() {
        this.x *= -1;
        this.y *= -1;
        // this.z *= -1
        return this;
    }
    cross(V) {
        this.x = this.y * V.z - this.z * V.y;
        this.y = this.z * V.x - this.x * V.z;
        // this.z = this.x * V.y - this.y * V.x
        return this;
    }
    dpr(V) {
        return Vec2d.Dpr(this, V);
    }
    cpr(V) {
        return Vec2d.Cpr(this, V);
    }
    len2() {
        return Vec2d.Len2(this);
    }
    len() {
        return Vec2d.Len(this);
    }
    pry(V) {
        return Vec2d.Pry(this, V);
    }
    per() {
        const { x, y } = this;
        this.x = y;
        this.y = -x;
        return this;
    }
    uni() {
        return Vec2d.Uni(this);
    }
    tan(V) {
        return Vec2d.Tan(this, V);
    }
    dist(V) {
        return Vec2d.Dist(this, V);
    }
    distanceToLineSegment(A, B) {
        return Vec2d.DistanceToLineSegment(A, B, this);
    }
    slope(B) {
        return Vec2d.Slope(this, B);
    }
    snapToGrid(gridSize) {
        this.x = Math.round(this.x / gridSize) * gridSize;
        this.y = Math.round(this.y / gridSize) * gridSize;
        return this;
    }
    angle(B) {
        return Vec2d.Angle(this, B);
    }
    toAngle() {
        return Vec2d.ToAngle(this);
    }
    lrp(B, t) {
        this.x = this.x + (B.x - this.x) * t;
        this.y = this.y + (B.y - this.y) * t;
        return this;
    }
    equals(B, tolerance) {
        return Vec2d.Equals(this, B, tolerance);
    }
    equalsXY(x, y) {
        return Vec2d.EqualsXY(this, x, y);
    }
    norm() {
        const l = this.len();
        this.x = l === 0 ? 0 : this.x / l;
        this.y = l === 0 ? 0 : this.y / l;
        return this;
    }
    toFixed() {
        return Vec2d.ToFixed(this);
    }
    toString() {
        return Vec2d.ToString(Vec2d.ToFixed(this));
    }
    toJson() {
        return Vec2d.ToJson(this);
    }
    toArray() {
        return Vec2d.ToArray(this);
    }
    static Add(A, B) {
        return new Vec2d(A.x + B.x, A.y + B.y);
    }
    static AddXY(A, x, y) {
        return new Vec2d(A.x + x, A.y + y);
    }
    static Sub(A, B) {
        return new Vec2d(A.x - B.x, A.y - B.y);
    }
    static SubXY(A, x, y) {
        return new Vec2d(A.x - x, A.y - y);
    }
    static AddScalar(A, n) {
        return new Vec2d(A.x + n, A.y + n);
    }
    static SubScalar(A, n) {
        return new Vec2d(A.x - n, A.y - n);
    }
    static Div(A, t) {
        return new Vec2d(A.x / t, A.y / t);
    }
    static Mul(A, t) {
        return new Vec2d(A.x * t, A.y * t);
    }
    static DivV(A, B) {
        return new Vec2d(A.x / B.x, A.y / B.y);
    }
    static MulV(A, B) {
        return new Vec2d(A.x * B.x, A.y * B.y);
    }
    static Neg(A) {
        return new Vec2d(-A.x, -A.y);
    }
    static Per(A) {
        return new Vec2d(A.y, -A.x);
    }
    static Dist2(A, B) {
        return Vec2d.Sub(A, B).len2();
    }
    static Abs(A) {
        return new Vec2d(Math.abs(A.x), Math.abs(A.y));
    }
    static Dist(A, B) {
        return Math.hypot(A.y - B.y, A.x - B.x);
    }
    static Dpr(A, B) {
        return A.x * B.x + A.y * B.y;
    }
    static Cross(A, V) {
        return new Vec2d(A.y * V.z - A.z * V.y, A.z * V.x - A.x * V.z
        // A.z = A.x * V.y - A.y * V.x
        );
    }
    static Cpr(A, B) {
        return A.x * B.y - B.x * A.y;
    }
    static Len2(A) {
        return A.x * A.x + A.y * A.y;
    }
    static Len(A) {
        return Math.hypot(A.x, A.y);
    }
    static Pry(A, B) {
        return Vec2d.Dpr(A, B) / Vec2d.Len(B);
    }
    static Uni(A) {
        return Vec2d.Div(A, Vec2d.Len(A));
    }
    static Tan(A, B) {
        return Vec2d.Uni(Vec2d.Sub(A, B));
    }
    static Min(A, B) {
        return new Vec2d(Math.min(A.x, B.x), Math.min(A.y, B.y));
    }
    static Max(A, B) {
        return new Vec2d(Math.max(A.x, B.x), Math.max(A.y, B.y));
    }
    static From(A) {
        return new Vec2d().add(A);
    }
    static FromArray(v) {
        return new Vec2d(v[0], v[1]);
    }
    static Rot(A, r = 0) {
        const s = Math.sin(r);
        const c = Math.cos(r);
        return new Vec2d(A.x * c - A.y * s, A.x * s + A.y * c);
    }
    static RotWith(A, C, r) {
        const x = A.x - C.x;
        const y = A.y - C.y;
        const s = Math.sin(r);
        const c = Math.cos(r);
        return new Vec2d(C.x + (x * c - y * s), C.y + (x * s + y * c));
    }
    /**
     * Get the nearest point on a line with a known unit vector that passes through point A
     *
     * ```ts
     * Vec.nearestPointOnLineThroughPoint(A, u, Point)
     * ```
     *
     * @param A - Any point on the line
     * @param u - The unit vector for the line.
     * @param P - A point not on the line to test.
     */
    static NearestPointOnLineThroughPoint(A, u, P) {
        return Vec2d.Mul(u, Vec2d.Sub(P, A).pry(u)).add(A);
    }
    static NearestPointOnLineSegment(A, B, P, clamp = true) {
        const u = Vec2d.Tan(B, A);
        const C = Vec2d.Add(A, Vec2d.Mul(u, Vec2d.Sub(P, A).pry(u)));
        // todo: fix error P is B or A, which leads to a NaN value
        if (clamp) {
            if (C.x < Math.min(A.x, B.x))
                return Vec2d.Cast(A.x < B.x ? A : B);
            if (C.x > Math.max(A.x, B.x))
                return Vec2d.Cast(A.x > B.x ? A : B);
            if (C.y < Math.min(A.y, B.y))
                return Vec2d.Cast(A.y < B.y ? A : B);
            if (C.y > Math.max(A.y, B.y))
                return Vec2d.Cast(A.y > B.y ? A : B);
        }
        return C;
    }
    static DistanceToLineThroughPoint(A, u, P) {
        return Vec2d.Dist(P, Vec2d.NearestPointOnLineThroughPoint(A, u, P));
    }
    static DistanceToLineSegment(A, B, P, clamp = true) {
        return Vec2d.Dist(P, Vec2d.NearestPointOnLineSegment(A, B, P, clamp));
    }
    static Snap(A, step = 1) {
        return new Vec2d(Math.round(A.x / step) * step, Math.round(A.y / step) * step);
    }
    static Cast(A) {
        if (A instanceof Vec2d)
            return A;
        return Vec2d.From(A);
    }
    static Slope(A, B) {
        if (A.x === B.y)
            return NaN;
        return (A.y - B.y) / (A.x - B.x);
    }
    static Angle(A, B) {
        return Math.atan2(B.y - A.y, B.x - A.x);
    }
    static Lrp(A, B, t) {
        return Vec2d.Sub(B, A).mul(t).add(A);
    }
    static Med(A, B) {
        return new Vec2d((A.x + B.x) / 2, (A.y + B.y) / 2);
    }
    static Equals(A, B, tolerance = 0.0001) {
        return Math.abs(A.x - B.x) < tolerance && Math.abs(A.y - B.y) < tolerance;
    }
    static EqualsXY(A, x, y) {
        return A.x === x && A.y === y;
    }
    static EqualsXYZ(A, B, tolerance = 0.0001) {
        return Vec2d.Equals(A, B, tolerance) && Math.abs((A.z || 0) - (B.z || 0)) < tolerance;
    }
    static Clockwise(A, B, C) {
        return (C.x - A.x) * (B.y - A.y) - (B.x - A.x) * (C.y - A.y) < 0;
    }
    static Rescale(A, n) {
        const l = Vec2d.Len(A);
        return new Vec2d((n * A.x) / l, (n * A.y) / l);
    }
    static ScaleWithOrigin(A, scale, origin) {
        return Vec2d.Sub(A, origin).mul(scale).add(origin);
    }
    static ScaleWOrigin(A, scale, origin) {
        return Vec2d.Sub(A, origin).mulV(scale).add(origin);
    }
    static ToFixed(A, n = 2) {
        return new Vec2d(+A.x.toFixed(n), +A.y.toFixed(n), +A.z.toFixed(n));
    }
    static Nudge(A, B, distance) {
        return Vec2d.Add(A, Vec2d.Tan(B, A).mul(distance));
    }
    static ToString(A) {
        return `${A.x}, ${A.y}`;
    }
    static ToAngle(A) {
        let r = Math.atan2(A.y, A.x);
        if (r < 0)
            r += Math.PI * 2;
        return r;
    }
    static FromAngle(r, length = 1) {
        return new Vec2d(Math.cos(r) * length, Math.sin(r) * length);
    }
    static ToArray(A) {
        return [A.x, A.y, A.z];
    }
    static ToJson(A) {
        const { x, y, z } = A;
        return { x, y, z };
    }
    static Average(arr) {
        const len = arr.length;
        const avg = new Vec2d(0, 0);
        for (let i = 0; i < len; i++) {
            avg.add(arr[i]);
        }
        return avg.div(len);
    }
    static Clamp(A, min, max) {
        if (max === undefined) {
            return new Vec2d(Math.min(Math.max(A.x, min)), Math.min(Math.max(A.y, min)));
        }
        return new Vec2d(Math.min(Math.max(A.x, min), max), Math.min(Math.max(A.y, min), max));
    }
    /**
     * Get an array of points (with simulated pressure) between two points.
     *
     * @param A - The first point.
     * @param B - The second point.
     * @param steps - The number of points to return.
     */
    static PointsBetween(A, B, steps = 6) {
        const results = [];
        for (let i = 0; i < steps; i++) {
            const t = EASINGS.easeInQuad(i / (steps - 1));
            const point = Vec2d.Lrp(A, B, t);
            point.z = Math.min(1, 0.5 + Math.abs(0.5 - ease(t)) * 0.65);
            results.push(point);
        }
        return results;
    }
    static SnapToGrid(A, gridSize = 8) {
        return new Vec2d(Math.round(A.x / gridSize) * gridSize, Math.round(A.y / gridSize) * gridSize);
    }
}
const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);
