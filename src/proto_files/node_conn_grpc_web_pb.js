/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./node_conn_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.LedManipulationServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.LedManipulationServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TextMessage,
 *   !proto.TextMessage>}
 */
const methodDescriptor_LedManipulationService_StartLedPerformance = new grpc.web.MethodDescriptor(
  '/LedManipulationService/StartLedPerformance',
  grpc.web.MethodType.UNARY,
  proto.TextMessage,
  proto.TextMessage,
  /**
   * @param {!proto.TextMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TextMessage.deserializeBinary
);


/**
 * @param {!proto.TextMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TextMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TextMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.LedManipulationServiceClient.prototype.startLedPerformance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/LedManipulationService/StartLedPerformance',
      request,
      metadata || {},
      methodDescriptor_LedManipulationService_StartLedPerformance,
      callback);
};


/**
 * @param {!proto.TextMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TextMessage>}
 *     Promise that resolves to the response
 */
proto.LedManipulationServicePromiseClient.prototype.startLedPerformance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/LedManipulationService/StartLedPerformance',
      request,
      metadata || {},
      methodDescriptor_LedManipulationService_StartLedPerformance);
};


module.exports = proto;

