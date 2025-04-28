export default function div(v1, v2) {
    if (v2 === 0) {
        return 'Divisão por zero não é permitida.';
    }
    return v1 / v2;
}
