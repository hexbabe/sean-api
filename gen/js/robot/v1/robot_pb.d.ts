// package: viam.robot.v1
// file: robot/v1/robot.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TunnelRequest extends jspb.Message {
  getDestinationPort(): number;
  setDestinationPort(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TunnelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TunnelRequest): TunnelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TunnelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TunnelRequest;
  static deserializeBinaryFromReader(message: TunnelRequest, reader: jspb.BinaryReader): TunnelRequest;
}

export namespace TunnelRequest {
  export type AsObject = {
    destinationPort: number,
    data: Uint8Array | string,
  }
}

export class TunnelResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TunnelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TunnelResponse): TunnelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TunnelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TunnelResponse;
  static deserializeBinaryFromReader(message: TunnelResponse, reader: jspb.BinaryReader): TunnelResponse;
}

export namespace TunnelResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class ListTunnelsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTunnelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTunnelsRequest): ListTunnelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTunnelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTunnelsRequest;
  static deserializeBinaryFromReader(message: ListTunnelsRequest, reader: jspb.BinaryReader): ListTunnelsRequest;
}

export namespace ListTunnelsRequest {
  export type AsObject = {
  }
}

export class ListTunnelsResponse extends jspb.Message {
  clearTunnelsList(): void;
  getTunnelsList(): Array<Tunnel>;
  setTunnelsList(value: Array<Tunnel>): void;
  addTunnels(value?: Tunnel, index?: number): Tunnel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTunnelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTunnelsResponse): ListTunnelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTunnelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTunnelsResponse;
  static deserializeBinaryFromReader(message: ListTunnelsResponse, reader: jspb.BinaryReader): ListTunnelsResponse;
}

export namespace ListTunnelsResponse {
  export type AsObject = {
    tunnelsList: Array<Tunnel.AsObject>,
  }
}

export class Tunnel extends jspb.Message {
  getPort(): number;
  setPort(value: number): void;

  hasConnectionTimeout(): boolean;
  clearConnectionTimeout(): void;
  getConnectionTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setConnectionTimeout(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tunnel.AsObject;
  static toObject(includeInstance: boolean, msg: Tunnel): Tunnel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tunnel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tunnel;
  static deserializeBinaryFromReader(message: Tunnel, reader: jspb.BinaryReader): Tunnel;
}

export namespace Tunnel {
  export type AsObject = {
    port: number,
    connectionTimeout?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class FrameSystemConfig extends jspb.Message {
  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): common_v1_common_pb.Transform | undefined;
  setFrame(value?: common_v1_common_pb.Transform): void;

  hasKinematics(): boolean;
  clearKinematics(): void;
  getKinematics(): google_protobuf_struct_pb.Struct | undefined;
  setKinematics(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameSystemConfig.AsObject;
  static toObject(includeInstance: boolean, msg: FrameSystemConfig): FrameSystemConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameSystemConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameSystemConfig;
  static deserializeBinaryFromReader(message: FrameSystemConfig, reader: jspb.BinaryReader): FrameSystemConfig;
}

export namespace FrameSystemConfig {
  export type AsObject = {
    frame?: common_v1_common_pb.Transform.AsObject,
    kinematics?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class FrameSystemConfigRequest extends jspb.Message {
  clearSupplementalTransformsList(): void;
  getSupplementalTransformsList(): Array<common_v1_common_pb.Transform>;
  setSupplementalTransformsList(value: Array<common_v1_common_pb.Transform>): void;
  addSupplementalTransforms(value?: common_v1_common_pb.Transform, index?: number): common_v1_common_pb.Transform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameSystemConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FrameSystemConfigRequest): FrameSystemConfigRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameSystemConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameSystemConfigRequest;
  static deserializeBinaryFromReader(message: FrameSystemConfigRequest, reader: jspb.BinaryReader): FrameSystemConfigRequest;
}

export namespace FrameSystemConfigRequest {
  export type AsObject = {
    supplementalTransformsList: Array<common_v1_common_pb.Transform.AsObject>,
  }
}

export class FrameSystemConfigResponse extends jspb.Message {
  clearFrameSystemConfigsList(): void;
  getFrameSystemConfigsList(): Array<FrameSystemConfig>;
  setFrameSystemConfigsList(value: Array<FrameSystemConfig>): void;
  addFrameSystemConfigs(value?: FrameSystemConfig, index?: number): FrameSystemConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameSystemConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FrameSystemConfigResponse): FrameSystemConfigResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameSystemConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameSystemConfigResponse;
  static deserializeBinaryFromReader(message: FrameSystemConfigResponse, reader: jspb.BinaryReader): FrameSystemConfigResponse;
}

export namespace FrameSystemConfigResponse {
  export type AsObject = {
    frameSystemConfigsList: Array<FrameSystemConfig.AsObject>,
  }
}

export class TransformPoseRequest extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): common_v1_common_pb.PoseInFrame | undefined;
  setSource(value?: common_v1_common_pb.PoseInFrame): void;

  getDestination(): string;
  setDestination(value: string): void;

  clearSupplementalTransformsList(): void;
  getSupplementalTransformsList(): Array<common_v1_common_pb.Transform>;
  setSupplementalTransformsList(value: Array<common_v1_common_pb.Transform>): void;
  addSupplementalTransforms(value?: common_v1_common_pb.Transform, index?: number): common_v1_common_pb.Transform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformPoseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransformPoseRequest): TransformPoseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformPoseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformPoseRequest;
  static deserializeBinaryFromReader(message: TransformPoseRequest, reader: jspb.BinaryReader): TransformPoseRequest;
}

export namespace TransformPoseRequest {
  export type AsObject = {
    source?: common_v1_common_pb.PoseInFrame.AsObject,
    destination: string,
    supplementalTransformsList: Array<common_v1_common_pb.Transform.AsObject>,
  }
}

export class TransformPoseResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.PoseInFrame | undefined;
  setPose(value?: common_v1_common_pb.PoseInFrame): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformPoseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransformPoseResponse): TransformPoseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformPoseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformPoseResponse;
  static deserializeBinaryFromReader(message: TransformPoseResponse, reader: jspb.BinaryReader): TransformPoseResponse;
}

export namespace TransformPoseResponse {
  export type AsObject = {
    pose?: common_v1_common_pb.PoseInFrame.AsObject,
  }
}

export class TransformPCDRequest extends jspb.Message {
  getPointCloudPcd(): Uint8Array | string;
  getPointCloudPcd_asU8(): Uint8Array;
  getPointCloudPcd_asB64(): string;
  setPointCloudPcd(value: Uint8Array | string): void;

  getSource(): string;
  setSource(value: string): void;

  getDestination(): string;
  setDestination(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformPCDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransformPCDRequest): TransformPCDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformPCDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformPCDRequest;
  static deserializeBinaryFromReader(message: TransformPCDRequest, reader: jspb.BinaryReader): TransformPCDRequest;
}

export namespace TransformPCDRequest {
  export type AsObject = {
    pointCloudPcd: Uint8Array | string,
    source: string,
    destination: string,
  }
}

export class TransformPCDResponse extends jspb.Message {
  getPointCloudPcd(): Uint8Array | string;
  getPointCloudPcd_asU8(): Uint8Array;
  getPointCloudPcd_asB64(): string;
  setPointCloudPcd(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransformPCDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransformPCDResponse): TransformPCDResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransformPCDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransformPCDResponse;
  static deserializeBinaryFromReader(message: TransformPCDResponse, reader: jspb.BinaryReader): TransformPCDResponse;
}

export namespace TransformPCDResponse {
  export type AsObject = {
    pointCloudPcd: Uint8Array | string,
  }
}

export class ResourceNamesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceNamesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceNamesRequest): ResourceNamesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceNamesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceNamesRequest;
  static deserializeBinaryFromReader(message: ResourceNamesRequest, reader: jspb.BinaryReader): ResourceNamesRequest;
}

export namespace ResourceNamesRequest {
  export type AsObject = {
  }
}

export class ResourceNamesResponse extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<common_v1_common_pb.ResourceName>;
  setResourcesList(value: Array<common_v1_common_pb.ResourceName>): void;
  addResources(value?: common_v1_common_pb.ResourceName, index?: number): common_v1_common_pb.ResourceName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceNamesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceNamesResponse): ResourceNamesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceNamesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceNamesResponse;
  static deserializeBinaryFromReader(message: ResourceNamesResponse, reader: jspb.BinaryReader): ResourceNamesResponse;
}

export namespace ResourceNamesResponse {
  export type AsObject = {
    resourcesList: Array<common_v1_common_pb.ResourceName.AsObject>,
  }
}

export class ResourceRPCSubtype extends jspb.Message {
  hasSubtype(): boolean;
  clearSubtype(): void;
  getSubtype(): common_v1_common_pb.ResourceName | undefined;
  setSubtype(value?: common_v1_common_pb.ResourceName): void;

  getProtoService(): string;
  setProtoService(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRPCSubtype.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRPCSubtype): ResourceRPCSubtype.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRPCSubtype, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRPCSubtype;
  static deserializeBinaryFromReader(message: ResourceRPCSubtype, reader: jspb.BinaryReader): ResourceRPCSubtype;
}

export namespace ResourceRPCSubtype {
  export type AsObject = {
    subtype?: common_v1_common_pb.ResourceName.AsObject,
    protoService: string,
  }
}

export class ResourceRPCSubtypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRPCSubtypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRPCSubtypesRequest): ResourceRPCSubtypesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRPCSubtypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRPCSubtypesRequest;
  static deserializeBinaryFromReader(message: ResourceRPCSubtypesRequest, reader: jspb.BinaryReader): ResourceRPCSubtypesRequest;
}

export namespace ResourceRPCSubtypesRequest {
  export type AsObject = {
  }
}

export class ResourceRPCSubtypesResponse extends jspb.Message {
  clearResourceRpcSubtypesList(): void;
  getResourceRpcSubtypesList(): Array<ResourceRPCSubtype>;
  setResourceRpcSubtypesList(value: Array<ResourceRPCSubtype>): void;
  addResourceRpcSubtypes(value?: ResourceRPCSubtype, index?: number): ResourceRPCSubtype;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceRPCSubtypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceRPCSubtypesResponse): ResourceRPCSubtypesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceRPCSubtypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceRPCSubtypesResponse;
  static deserializeBinaryFromReader(message: ResourceRPCSubtypesResponse, reader: jspb.BinaryReader): ResourceRPCSubtypesResponse;
}

export namespace ResourceRPCSubtypesResponse {
  export type AsObject = {
    resourceRpcSubtypesList: Array<ResourceRPCSubtype.AsObject>,
  }
}

export class Operation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMethod(): string;
  setMethod(value: string): void;

  hasArguments(): boolean;
  clearArguments(): void;
  getArguments(): google_protobuf_struct_pb.Struct | undefined;
  setArguments(value?: google_protobuf_struct_pb.Struct): void;

  hasStarted(): boolean;
  clearStarted(): void;
  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSessionId(): boolean;
  clearSessionId(): void;
  getSessionId(): string;
  setSessionId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    id: string,
    method: string,
    arguments?: google_protobuf_struct_pb.Struct.AsObject,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sessionId: string,
  }
}

export class GetOperationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationsRequest): GetOperationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationsRequest;
  static deserializeBinaryFromReader(message: GetOperationsRequest, reader: jspb.BinaryReader): GetOperationsRequest;
}

export namespace GetOperationsRequest {
  export type AsObject = {
  }
}

export class GetOperationsResponse extends jspb.Message {
  clearOperationsList(): void;
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): void;
  addOperations(value?: Operation, index?: number): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationsResponse): GetOperationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationsResponse;
  static deserializeBinaryFromReader(message: GetOperationsResponse, reader: jspb.BinaryReader): GetOperationsResponse;
}

export namespace GetOperationsResponse {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
  }
}

export class CancelOperationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOperationRequest): CancelOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
  static deserializeBinaryFromReader(message: CancelOperationRequest, reader: jspb.BinaryReader): CancelOperationRequest;
}

export namespace CancelOperationRequest {
  export type AsObject = {
    id: string,
  }
}

export class CancelOperationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOperationResponse): CancelOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOperationResponse;
  static deserializeBinaryFromReader(message: CancelOperationResponse, reader: jspb.BinaryReader): CancelOperationResponse;
}

export namespace CancelOperationResponse {
  export type AsObject = {
  }
}

export class BlockForOperationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockForOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BlockForOperationRequest): BlockForOperationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockForOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockForOperationRequest;
  static deserializeBinaryFromReader(message: BlockForOperationRequest, reader: jspb.BinaryReader): BlockForOperationRequest;
}

export namespace BlockForOperationRequest {
  export type AsObject = {
    id: string,
  }
}

export class BlockForOperationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockForOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockForOperationResponse): BlockForOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockForOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockForOperationResponse;
  static deserializeBinaryFromReader(message: BlockForOperationResponse, reader: jspb.BinaryReader): BlockForOperationResponse;
}

export namespace BlockForOperationResponse {
  export type AsObject = {
  }
}

export class PeerConnectionInfo extends jspb.Message {
  getType(): PeerConnectionTypeMap[keyof PeerConnectionTypeMap];
  setType(value: PeerConnectionTypeMap[keyof PeerConnectionTypeMap]): void;

  hasRemoteAddress(): boolean;
  clearRemoteAddress(): void;
  getRemoteAddress(): string;
  setRemoteAddress(value: string): void;

  hasLocalAddress(): boolean;
  clearLocalAddress(): void;
  getLocalAddress(): string;
  setLocalAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerConnectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PeerConnectionInfo): PeerConnectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerConnectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerConnectionInfo;
  static deserializeBinaryFromReader(message: PeerConnectionInfo, reader: jspb.BinaryReader): PeerConnectionInfo;
}

export namespace PeerConnectionInfo {
  export type AsObject = {
    type: PeerConnectionTypeMap[keyof PeerConnectionTypeMap],
    remoteAddress: string,
    localAddress: string,
  }
}

export class Session extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasPeerConnectionInfo(): boolean;
  clearPeerConnectionInfo(): void;
  getPeerConnectionInfo(): PeerConnectionInfo | undefined;
  setPeerConnectionInfo(value?: PeerConnectionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    id: string,
    peerConnectionInfo?: PeerConnectionInfo.AsObject,
  }
}

export class GetSessionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionsRequest): GetSessionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionsRequest;
  static deserializeBinaryFromReader(message: GetSessionsRequest, reader: jspb.BinaryReader): GetSessionsRequest;
}

export namespace GetSessionsRequest {
  export type AsObject = {
  }
}

export class GetSessionsResponse extends jspb.Message {
  clearSessionsList(): void;
  getSessionsList(): Array<Session>;
  setSessionsList(value: Array<Session>): void;
  addSessions(value?: Session, index?: number): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionsResponse): GetSessionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionsResponse;
  static deserializeBinaryFromReader(message: GetSessionsResponse, reader: jspb.BinaryReader): GetSessionsResponse;
}

export namespace GetSessionsResponse {
  export type AsObject = {
    sessionsList: Array<Session.AsObject>,
  }
}

export class ModuleModel extends jspb.Message {
  getModuleName(): string;
  setModuleName(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  getApi(): string;
  setApi(value: string): void;

  getFromLocalModule(): boolean;
  setFromLocalModule(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleModel.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleModel): ModuleModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModuleModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleModel;
  static deserializeBinaryFromReader(message: ModuleModel, reader: jspb.BinaryReader): ModuleModel;
}

export namespace ModuleModel {
  export type AsObject = {
    moduleName: string,
    model: string,
    api: string,
    fromLocalModule: boolean,
  }
}

export class GetModelsFromModulesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelsFromModulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelsFromModulesRequest): GetModelsFromModulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelsFromModulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelsFromModulesRequest;
  static deserializeBinaryFromReader(message: GetModelsFromModulesRequest, reader: jspb.BinaryReader): GetModelsFromModulesRequest;
}

export namespace GetModelsFromModulesRequest {
  export type AsObject = {
  }
}

export class GetModelsFromModulesResponse extends jspb.Message {
  clearModelsList(): void;
  getModelsList(): Array<ModuleModel>;
  setModelsList(value: Array<ModuleModel>): void;
  addModels(value?: ModuleModel, index?: number): ModuleModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelsFromModulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelsFromModulesResponse): GetModelsFromModulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModelsFromModulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelsFromModulesResponse;
  static deserializeBinaryFromReader(message: GetModelsFromModulesResponse, reader: jspb.BinaryReader): GetModelsFromModulesResponse;
}

export namespace GetModelsFromModulesResponse {
  export type AsObject = {
    modelsList: Array<ModuleModel.AsObject>,
  }
}

export class Status extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): common_v1_common_pb.ResourceName | undefined;
  setName(value?: common_v1_common_pb.ResourceName): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_protobuf_struct_pb.Struct | undefined;
  setStatus(value?: google_protobuf_struct_pb.Struct): void;

  hasLastReconfigured(): boolean;
  clearLastReconfigured(): void;
  getLastReconfigured(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastReconfigured(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    name?: common_v1_common_pb.ResourceName.AsObject,
    status?: google_protobuf_struct_pb.Struct.AsObject,
    lastReconfigured?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetStatusRequest extends jspb.Message {
  clearResourceNamesList(): void;
  getResourceNamesList(): Array<common_v1_common_pb.ResourceName>;
  setResourceNamesList(value: Array<common_v1_common_pb.ResourceName>): void;
  addResourceNames(value?: common_v1_common_pb.ResourceName, index?: number): common_v1_common_pb.ResourceName;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusRequest): GetStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusRequest;
  static deserializeBinaryFromReader(message: GetStatusRequest, reader: jspb.BinaryReader): GetStatusRequest;
}

export namespace GetStatusRequest {
  export type AsObject = {
    resourceNamesList: Array<common_v1_common_pb.ResourceName.AsObject>,
  }
}

export class GetStatusResponse extends jspb.Message {
  clearStatusList(): void;
  getStatusList(): Array<Status>;
  setStatusList(value: Array<Status>): void;
  addStatus(value?: Status, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatusResponse): GetStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatusResponse;
  static deserializeBinaryFromReader(message: GetStatusResponse, reader: jspb.BinaryReader): GetStatusResponse;
}

export namespace GetStatusResponse {
  export type AsObject = {
    statusList: Array<Status.AsObject>,
  }
}

export class StreamStatusRequest extends jspb.Message {
  clearResourceNamesList(): void;
  getResourceNamesList(): Array<common_v1_common_pb.ResourceName>;
  setResourceNamesList(value: Array<common_v1_common_pb.ResourceName>): void;
  addResourceNames(value?: common_v1_common_pb.ResourceName, index?: number): common_v1_common_pb.ResourceName;

  hasEvery(): boolean;
  clearEvery(): void;
  getEvery(): google_protobuf_duration_pb.Duration | undefined;
  setEvery(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamStatusRequest): StreamStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamStatusRequest;
  static deserializeBinaryFromReader(message: StreamStatusRequest, reader: jspb.BinaryReader): StreamStatusRequest;
}

export namespace StreamStatusRequest {
  export type AsObject = {
    resourceNamesList: Array<common_v1_common_pb.ResourceName.AsObject>,
    every?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class StreamStatusResponse extends jspb.Message {
  clearStatusList(): void;
  getStatusList(): Array<Status>;
  setStatusList(value: Array<Status>): void;
  addStatus(value?: Status, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamStatusResponse): StreamStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamStatusResponse;
  static deserializeBinaryFromReader(message: StreamStatusResponse, reader: jspb.BinaryReader): StreamStatusResponse;
}

export namespace StreamStatusResponse {
  export type AsObject = {
    statusList: Array<Status.AsObject>,
  }
}

export class StopExtraParameters extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): common_v1_common_pb.ResourceName | undefined;
  setName(value?: common_v1_common_pb.ResourceName): void;

  hasParams(): boolean;
  clearParams(): void;
  getParams(): google_protobuf_struct_pb.Struct | undefined;
  setParams(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopExtraParameters.AsObject;
  static toObject(includeInstance: boolean, msg: StopExtraParameters): StopExtraParameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopExtraParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopExtraParameters;
  static deserializeBinaryFromReader(message: StopExtraParameters, reader: jspb.BinaryReader): StopExtraParameters;
}

export namespace StopExtraParameters {
  export type AsObject = {
    name?: common_v1_common_pb.ResourceName.AsObject,
    params?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class StopAllRequest extends jspb.Message {
  clearExtraList(): void;
  getExtraList(): Array<StopExtraParameters>;
  setExtraList(value: Array<StopExtraParameters>): void;
  addExtra(value?: StopExtraParameters, index?: number): StopExtraParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllRequest): StopAllRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllRequest;
  static deserializeBinaryFromReader(message: StopAllRequest, reader: jspb.BinaryReader): StopAllRequest;
}

export namespace StopAllRequest {
  export type AsObject = {
    extraList: Array<StopExtraParameters.AsObject>,
  }
}

export class StopAllResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopAllResponse): StopAllResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopAllResponse;
  static deserializeBinaryFromReader(message: StopAllResponse, reader: jspb.BinaryReader): StopAllResponse;
}

export namespace StopAllResponse {
  export type AsObject = {
  }
}

export class StartSessionRequest extends jspb.Message {
  getResume(): string;
  setResume(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartSessionRequest): StartSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSessionRequest;
  static deserializeBinaryFromReader(message: StartSessionRequest, reader: jspb.BinaryReader): StartSessionRequest;
}

export namespace StartSessionRequest {
  export type AsObject = {
    resume: string,
  }
}

export class StartSessionResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasHeartbeatWindow(): boolean;
  clearHeartbeatWindow(): void;
  getHeartbeatWindow(): google_protobuf_duration_pb.Duration | undefined;
  setHeartbeatWindow(value?: google_protobuf_duration_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartSessionResponse): StartSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StartSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartSessionResponse;
  static deserializeBinaryFromReader(message: StartSessionResponse, reader: jspb.BinaryReader): StartSessionResponse;
}

export namespace StartSessionResponse {
  export type AsObject = {
    id: string,
    heartbeatWindow?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class SendSessionHeartbeatRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSessionHeartbeatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendSessionHeartbeatRequest): SendSessionHeartbeatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendSessionHeartbeatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSessionHeartbeatRequest;
  static deserializeBinaryFromReader(message: SendSessionHeartbeatRequest, reader: jspb.BinaryReader): SendSessionHeartbeatRequest;
}

export namespace SendSessionHeartbeatRequest {
  export type AsObject = {
    id: string,
  }
}

export class SendSessionHeartbeatResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendSessionHeartbeatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendSessionHeartbeatResponse): SendSessionHeartbeatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendSessionHeartbeatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendSessionHeartbeatResponse;
  static deserializeBinaryFromReader(message: SendSessionHeartbeatResponse, reader: jspb.BinaryReader): SendSessionHeartbeatResponse;
}

export namespace SendSessionHeartbeatResponse {
  export type AsObject = {
  }
}

export class LogRequest extends jspb.Message {
  clearLogsList(): void;
  getLogsList(): Array<common_v1_common_pb.LogEntry>;
  setLogsList(value: Array<common_v1_common_pb.LogEntry>): void;
  addLogs(value?: common_v1_common_pb.LogEntry, index?: number): common_v1_common_pb.LogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogRequest): LogRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogRequest;
  static deserializeBinaryFromReader(message: LogRequest, reader: jspb.BinaryReader): LogRequest;
}

export namespace LogRequest {
  export type AsObject = {
    logsList: Array<common_v1_common_pb.LogEntry.AsObject>,
  }
}

export class LogResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogResponse): LogResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogResponse;
  static deserializeBinaryFromReader(message: LogResponse, reader: jspb.BinaryReader): LogResponse;
}

export namespace LogResponse {
  export type AsObject = {
  }
}

export class GetCloudMetadataRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCloudMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCloudMetadataRequest): GetCloudMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCloudMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCloudMetadataRequest;
  static deserializeBinaryFromReader(message: GetCloudMetadataRequest, reader: jspb.BinaryReader): GetCloudMetadataRequest;
}

export namespace GetCloudMetadataRequest {
  export type AsObject = {
  }
}

export class GetCloudMetadataResponse extends jspb.Message {
  getRobotPartId(): string;
  setRobotPartId(value: string): void;

  getPrimaryOrgId(): string;
  setPrimaryOrgId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getMachineId(): string;
  setMachineId(value: string): void;

  getMachinePartId(): string;
  setMachinePartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCloudMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCloudMetadataResponse): GetCloudMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCloudMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCloudMetadataResponse;
  static deserializeBinaryFromReader(message: GetCloudMetadataResponse, reader: jspb.BinaryReader): GetCloudMetadataResponse;
}

export namespace GetCloudMetadataResponse {
  export type AsObject = {
    robotPartId: string,
    primaryOrgId: string,
    locationId: string,
    machineId: string,
    machinePartId: string,
  }
}

export class RestartModuleRequest extends jspb.Message {
  hasModuleId(): boolean;
  clearModuleId(): void;
  getModuleId(): string;
  setModuleId(value: string): void;

  hasModuleName(): boolean;
  clearModuleName(): void;
  getModuleName(): string;
  setModuleName(value: string): void;

  getIdOrNameCase(): RestartModuleRequest.IdOrNameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestartModuleRequest): RestartModuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartModuleRequest;
  static deserializeBinaryFromReader(message: RestartModuleRequest, reader: jspb.BinaryReader): RestartModuleRequest;
}

export namespace RestartModuleRequest {
  export type AsObject = {
    moduleId: string,
    moduleName: string,
  }

  export enum IdOrNameCase {
    ID_OR_NAME_NOT_SET = 0,
    MODULE_ID = 1,
    MODULE_NAME = 2,
  }
}

export class RestartModuleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestartModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestartModuleResponse): RestartModuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestartModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestartModuleResponse;
  static deserializeBinaryFromReader(message: RestartModuleResponse, reader: jspb.BinaryReader): RestartModuleResponse;
}

export namespace RestartModuleResponse {
  export type AsObject = {
  }
}

export class ShutdownRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownRequest): ShutdownRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShutdownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownRequest;
  static deserializeBinaryFromReader(message: ShutdownRequest, reader: jspb.BinaryReader): ShutdownRequest;
}

export namespace ShutdownRequest {
  export type AsObject = {
  }
}

export class ShutdownResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShutdownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShutdownResponse): ShutdownResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShutdownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShutdownResponse;
  static deserializeBinaryFromReader(message: ShutdownResponse, reader: jspb.BinaryReader): ShutdownResponse;
}

export namespace ShutdownResponse {
  export type AsObject = {
  }
}

export class GetMachineStatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMachineStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMachineStatusRequest): GetMachineStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMachineStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMachineStatusRequest;
  static deserializeBinaryFromReader(message: GetMachineStatusRequest, reader: jspb.BinaryReader): GetMachineStatusRequest;
}

export namespace GetMachineStatusRequest {
  export type AsObject = {
  }
}

export class GetMachineStatusResponse extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<ResourceStatus>;
  setResourcesList(value: Array<ResourceStatus>): void;
  addResources(value?: ResourceStatus, index?: number): ResourceStatus;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ConfigStatus | undefined;
  setConfig(value?: ConfigStatus): void;

  getState(): GetMachineStatusResponse.StateMap[keyof GetMachineStatusResponse.StateMap];
  setState(value: GetMachineStatusResponse.StateMap[keyof GetMachineStatusResponse.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMachineStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMachineStatusResponse): GetMachineStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMachineStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMachineStatusResponse;
  static deserializeBinaryFromReader(message: GetMachineStatusResponse, reader: jspb.BinaryReader): GetMachineStatusResponse;
}

export namespace GetMachineStatusResponse {
  export type AsObject = {
    resourcesList: Array<ResourceStatus.AsObject>,
    config?: ConfigStatus.AsObject,
    state: GetMachineStatusResponse.StateMap[keyof GetMachineStatusResponse.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STATE_INITIALIZING: 1;
    STATE_RUNNING: 2;
  }

  export const State: StateMap;
}

export class ResourceStatus extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): common_v1_common_pb.ResourceName | undefined;
  setName(value?: common_v1_common_pb.ResourceName): void;

  getState(): ResourceStatus.StateMap[keyof ResourceStatus.StateMap];
  setState(value: ResourceStatus.StateMap[keyof ResourceStatus.StateMap]): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRevision(): string;
  setRevision(value: string): void;

  getError(): string;
  setError(value: string): void;

  hasCloudMetadata(): boolean;
  clearCloudMetadata(): void;
  getCloudMetadata(): GetCloudMetadataResponse | undefined;
  setCloudMetadata(value?: GetCloudMetadataResponse): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceStatus): ResourceStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceStatus;
  static deserializeBinaryFromReader(message: ResourceStatus, reader: jspb.BinaryReader): ResourceStatus;
}

export namespace ResourceStatus {
  export type AsObject = {
    name?: common_v1_common_pb.ResourceName.AsObject,
    state: ResourceStatus.StateMap[keyof ResourceStatus.StateMap],
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    revision: string,
    error: string,
    cloudMetadata?: GetCloudMetadataResponse.AsObject,
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STATE_UNCONFIGURED: 1;
    STATE_CONFIGURING: 2;
    STATE_READY: 3;
    STATE_REMOVING: 4;
    STATE_UNHEALTHY: 5;
  }

  export const State: StateMap;
}

export class ConfigStatus extends jspb.Message {
  getRevision(): string;
  setRevision(value: string): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigStatus): ConfigStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigStatus;
  static deserializeBinaryFromReader(message: ConfigStatus, reader: jspb.BinaryReader): ConfigStatus;
}

export namespace ConfigStatus {
  export type AsObject = {
    revision: string,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetVersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
  static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
  export type AsObject = {
  }
}

export class GetVersionResponse extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getApiVersion(): string;
  setApiVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionResponse): GetVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
  static deserializeBinaryFromReader(message: GetVersionResponse, reader: jspb.BinaryReader): GetVersionResponse;
}

export namespace GetVersionResponse {
  export type AsObject = {
    platform: string,
    version: string,
    apiVersion: string,
  }
}

export class GetPoseRequest extends jspb.Message {
  getComponentName(): string;
  setComponentName(value: string): void;

  getDestinationFrame(): string;
  setDestinationFrame(value: string): void;

  clearSupplementalTransformsList(): void;
  getSupplementalTransformsList(): Array<common_v1_common_pb.Transform>;
  setSupplementalTransformsList(value: Array<common_v1_common_pb.Transform>): void;
  addSupplementalTransforms(value?: common_v1_common_pb.Transform, index?: number): common_v1_common_pb.Transform;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPoseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPoseRequest): GetPoseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPoseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPoseRequest;
  static deserializeBinaryFromReader(message: GetPoseRequest, reader: jspb.BinaryReader): GetPoseRequest;
}

export namespace GetPoseRequest {
  export type AsObject = {
    componentName: string,
    destinationFrame: string,
    supplementalTransformsList: Array<common_v1_common_pb.Transform.AsObject>,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPoseResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.PoseInFrame | undefined;
  setPose(value?: common_v1_common_pb.PoseInFrame): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPoseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPoseResponse): GetPoseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPoseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPoseResponse;
  static deserializeBinaryFromReader(message: GetPoseResponse, reader: jspb.BinaryReader): GetPoseResponse;
}

export namespace GetPoseResponse {
  export type AsObject = {
    pose?: common_v1_common_pb.PoseInFrame.AsObject,
  }
}

export interface PeerConnectionTypeMap {
  PEER_CONNECTION_TYPE_UNSPECIFIED: 0;
  PEER_CONNECTION_TYPE_GRPC: 1;
  PEER_CONNECTION_TYPE_WEBRTC: 2;
}

export const PeerConnectionType: PeerConnectionTypeMap;

