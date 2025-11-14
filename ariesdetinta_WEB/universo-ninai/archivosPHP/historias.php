<?php
header('Content-Type: application/json');

// Conexión a MySQL
$conexion = new mysqli("localhost", "root", "", "universo_ninai");

// Verificar conexión
if ($conexion->connect_error) {
  die(json_encode(["error" => "Conexión fallida: " . $conexion->connect_error]));
}

// Secciones que queremos consultar
$secciones = ['ultimas', 'top', 'recomendadas'];
$resultado = [];

// Consultar cada sección
foreach ($secciones as $seccion) {
  $sql = "SELECT titulo, FROM historias WHERE seccion = ?";
  $stmt = $conexion->prepare($sql);
  $stmt->bind_param("s", $seccion);
  $stmt->execute();
  $res = $stmt->get_result();

  $historias = [];
  while ($fila = $res->fetch_assoc()) {
    $historias[] = $fila;
  }

  $resultado[$seccion] = $historias;
  $stmt->close();
}

$conexion->close();

// Devolver resultado como JSON
echo json_encode($resultado);

// Mostrará cualquier error de PHP directamente en el navegador
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>