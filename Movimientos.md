| Campo         | Tipo                | Descripción                          |
| ------------- | ------------------- | ------------------------------------ |
| `monto`       | `number`            | Valor del ingreso o egreso           |
| `tipo`        | `string`            | `"ingreso"` o `"egreso"`             |
| `moneda`      | `string`            | `"S/"` o `"$"`             |
| `categoria`   | `string`            | Ejemplo: `"comida"`, `"sueldo"`      |
| `descripcion` | `string` (opcional) | Detalles del movimiento              |
| `fecha`       | `timestamp`         | Fecha y hora del registro            |
| `usuarioId`   | `string` (opcional) | Si en el futuro quieres multiusuario |
